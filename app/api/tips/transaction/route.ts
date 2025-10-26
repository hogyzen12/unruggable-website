import { NextResponse } from 'next/server';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

const TIP_ADDRESS = 'juLesoSmdTcRtzjCzYzRoHrnF8GhVu6KCV7uxq7nJGp';
const RPC_ENDPOINT = 'https://johna-k3cr1v-fast-mainnet.helius-rpc.com';

export async function POST(request: Request) {
  try {
    const { signature } = await request.json();

    if (!signature) {
      return NextResponse.json(
        { error: 'Signature required' },
        { status: 400 }
      );
    }

    const connection = new Connection(RPC_ENDPOINT, 'confirmed');

    const tx = await connection.getTransaction(signature, {
      maxSupportedTransactionVersion: 0,
    });

    if (!tx || !tx.meta) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    // Only process legacy transactions to avoid lookup table issues
    const message = tx.transaction.message;
    if (!('accountKeys' in message)) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    const accountKeys = message.accountKeys;
    const tipAddressIndex = accountKeys.findIndex(
      (key: any) => key.toBase58() === TIP_ADDRESS
    );

    if (tipAddressIndex === -1) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    // Calculate the amount received
    const preBalance = tx.meta.preBalances[tipAddressIndex] || 0;
    const postBalance = tx.meta.postBalances[tipAddressIndex] || 0;
    const amountReceived = (postBalance - preBalance) / LAMPORTS_PER_SOL;

    // Only return if we received SOL
    if (amountReceived <= 0) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        signature: signature,
        blockTime: tx.blockTime || 0,
        sender: accountKeys[0].toBase58(),
        amount: amountReceived,
        fee: tx.meta.fee / LAMPORTS_PER_SOL,
      }
    });
  } catch (error) {
    console.error('Error fetching transaction:', error);
    return NextResponse.json({
      success: true,
      data: null, // Return null for failed transactions instead of erroring
    });
  }
}