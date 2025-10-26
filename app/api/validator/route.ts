import { NextResponse } from 'next/server';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const VALIDATOR_ADDRESS = 'unRgBLTLNXdBmenHXNPAg3AMn3KWcV3Mk4eoZBmTrdk';
const RPC_ENDPOINT = 'https://johna-k3cr1v-fast-mainnet.helius-rpc.com';

export async function GET() {
  try {
    // Create connection to Solana blockchain
    const connection = new Connection(RPC_ENDPOINT, 'confirmed');
    
    // Get validator public key
    const validatorPubkey = new PublicKey(VALIDATOR_ADDRESS);
    
    // Fetch account info
    const accountInfo = await connection.getAccountInfo(validatorPubkey);
    
    if (!accountInfo) {
      return NextResponse.json(
        { error: 'Validator account not found' },
        { status: 404 }
      );
    }

    // Get account balance in SOL
    const balance = accountInfo.lamports / LAMPORTS_PER_SOL;
    
    // Fetch vote accounts to get stake information
    const voteAccounts = await connection.getVoteAccounts();
    
    // Find our validator in the vote accounts
    const ourValidator = voteAccounts.current.find(
      (v) => v.votePubkey === VALIDATOR_ADDRESS
    ) || voteAccounts.delinquent.find(
      (v) => v.votePubkey === VALIDATOR_ADDRESS
    );
    
    // Calculate total staked SOL (activated stake)
    const activatedStake = ourValidator 
      ? ourValidator.activatedStake / LAMPORTS_PER_SOL
      : 0;
    
    // Get epoch info
    const epochInfo = await connection.getEpochInfo();
    
    // Fetch real-time SOL price from Jupiter
    let solPrice = 200; // Fallback price
    try {
      const priceResponse = await fetch(
        'https://lite-api.jup.ag/price/v3?ids=So11111111111111111111111111111111111111112'
      );
      const priceData = await priceResponse.json();
      
      if (priceData['So11111111111111111111111111111111111111112']?.usdPrice) {
        solPrice = priceData['So11111111111111111111111111111111111111112'].usdPrice;
      }
    } catch (priceError) {
      console.error('Error fetching SOL price from Jupiter:', priceError);
      // Continue with fallback price
    }
    
    const totalValueUSD = activatedStake * solPrice;
    
    return NextResponse.json({
      success: true,
      data: {
        validatorAddress: VALIDATOR_ADDRESS,
        balance: balance,
        activatedStake: activatedStake,
        totalValueUSD: totalValueUSD,
        solPrice: solPrice,
        commission: ourValidator?.commission || 0,
        epochInfo: {
          epoch: epochInfo.epoch,
          slotIndex: epochInfo.slotIndex,
          slotsInEpoch: epochInfo.slotsInEpoch,
        },
        lastUpdated: new Date().toISOString(),
      }
    });
    
  } catch (error) {
    console.error('Error fetching validator data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch validator data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}