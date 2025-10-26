import { NextResponse } from 'next/server';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getCached, setCache } from '@/app/lib/cache';

const TIP_ADDRESS = 'juLesoSmdTcRtzjCzYzRoHrnF8GhVu6KCV7uxq7nJGp';
const RPC_ENDPOINT = 'https://johna-k3cr1v-fast-mainnet.helius-rpc.com';
const CACHE_KEY = 'tip-transactions-all-time';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface TransactionAnalysis {
  signature: string;
  blockTime: number;
  sender: string;
  amount: number;
  fee: number;
}

interface TipDataCache {
  tipAddress: string;
  currentBalance: number;
  totalTransactions: number;
  totalTipsReceived: number;
  uniqueUsers: number;
  avgTipAmount: number;
  recentTransactions: TransactionAnalysis[];
  lastUpdated: string;
}

export async function GET() {
  try {
    // Check cache first
    const cached = await getCached<TipDataCache>(CACHE_KEY, { ttl: CACHE_TTL });
    if (cached) {
      console.log('Returning cached tip data');
      return NextResponse.json({
        success: true,
        data: cached,
        cached: true,
      });
    }

    console.log('Cache miss - fetching fresh data');
    const connection = new Connection(RPC_ENDPOINT, 'confirmed');
    const tipPubkey = new PublicKey(TIP_ADDRESS);

    // Fetch account info for current balance
    const accountInfo = await connection.getAccountInfo(tipPubkey);
    const currentBalance = accountInfo ? accountInfo.lamports / LAMPORTS_PER_SOL : 0;

    // Fetch ALL transaction signatures with pagination
    console.log('Fetching ALL transaction signatures...');
    let allSignatures: any[] = [];
    let lastSignature: string | undefined = undefined;
    let hasMore = true;
    
    while (hasMore) {
      const signatures = await connection.getSignaturesForAddress(
        tipPubkey,
        {
          limit: 1000,
          before: lastSignature,
        }
      );
      
      if (signatures.length === 0) {
        hasMore = false;
      } else {
        allSignatures = allSignatures.concat(signatures);
        lastSignature = signatures[signatures.length - 1].signature;
        
        // If we got less than 1000, we've reached the end
        if (signatures.length < 1000) {
          hasMore = false;
        }
        
        console.log(`Fetched ${allSignatures.length} signatures so far...`);
      }
      
      // Add delay to avoid rate limiting
      if (hasMore) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    const totalTransactions = allSignatures.length;
    console.log(`Found ${totalTransactions} total transactions`);

    // Analyze ALL transactions to get accurate metrics
    const transactions: TransactionAnalysis[] = [];
    const uniqueSenders = new Set<string>();
    let totalTipsReceived = 0;
    
    console.log(`Analyzing ${totalTransactions} transactions in batches...`);
    
    // Process in batches to avoid overwhelming the RPC
    const BATCH_SIZE = 10;
    for (let i = 0; i < allSignatures.length; i += BATCH_SIZE) {
      const batch = allSignatures.slice(i, i + BATCH_SIZE);
      
      // Add delay between batches
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      const txPromises = batch.map(sig => 
        connection.getTransaction(sig.signature, {
          maxSupportedTransactionVersion: 0,
        }).catch(() => null)
      );
      
      const txResults = await Promise.all(txPromises);
      
      for (let j = 0; j < txResults.length; j++) {
        const tx = txResults[j];
        const sig = batch[j];
        
        if (!tx || !tx.meta) continue;
        
        try {
          // Get account keys - only process legacy transactions for now
          const message = tx.transaction.message;
          let accountKeys;
          
          if ('accountKeys' in message) {
            accountKeys = message.accountKeys;
          } else {
            // Skip versioned transactions
            continue;
          }
          
          const tipAddressIndex = accountKeys.findIndex(
            (key: any) => key.toBase58() === TIP_ADDRESS
          );
          
          if (tipAddressIndex === -1) continue;
          
          // Calculate the amount received
          const preBalance = tx.meta.preBalances[tipAddressIndex] || 0;
          const postBalance = tx.meta.postBalances[tipAddressIndex] || 0;
          const amountReceived = (postBalance - preBalance) / LAMPORTS_PER_SOL;
          
          // Only count if we received SOL
          if (amountReceived > 0) {
            const sender = accountKeys[0].toBase58();
            uniqueSenders.add(sender);
            totalTipsReceived += amountReceived;
            
            transactions.push({
              signature: sig.signature,
              blockTime: sig.blockTime || 0,
              sender: sender,
              amount: amountReceived,
              fee: tx.meta.fee / LAMPORTS_PER_SOL,
            });
          }
        } catch {
          // Skip problematic transactions
          continue;
        }
      }
      
      if (i % 100 === 0) {
        console.log(`Processed ${i}/${totalTransactions} transactions...`);
      }
    }

    // Sort transactions by block time (most recent first)
    transactions.sort((a, b) => b.blockTime - a.blockTime);

    // Calculate statistics
    const avgTipAmount = transactions.length > 0 
      ? totalTipsReceived / transactions.length 
      : 0;

    const result: TipDataCache = {
      tipAddress: TIP_ADDRESS,
      currentBalance: currentBalance,
      totalTransactions: totalTransactions,
      totalTipsReceived: totalTipsReceived,
      uniqueUsers: uniqueSenders.size,
      avgTipAmount: avgTipAmount,
      recentTransactions: transactions.slice(0, 10), // Return 10 most recent
      lastUpdated: new Date().toISOString(),
    };

    // Cache the result
    await setCache(CACHE_KEY, result);
    console.log('Cached fresh tip data');

    return NextResponse.json({
      success: true,
      data: result,
      cached: false,
    });
    
  } catch (error) {
    console.error('Error fetching tip data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch tip data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}