import { NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';

const TIP_ADDRESS = 'juLesoSmdTcRtzjCzYzRoHrnF8GhVu6KCV7uxq7nJGp';
const RPC_ENDPOINT = 'https://johna-k3cr1v-fast-mainnet.helius-rpc.com';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const before = searchParams.get('before') || undefined;
    const limit = parseInt(searchParams.get('limit') || '1000');

    const connection = new Connection(RPC_ENDPOINT, 'confirmed');
    const tipPubkey = new PublicKey(TIP_ADDRESS);

    const signatures = await connection.getSignaturesForAddress(
      tipPubkey,
      {
        limit: Math.min(limit, 1000), // Max 1000 per request
        before: before,
      }
    );

    return NextResponse.json({
      success: true,
      data: {
        signatures: signatures.map(s => s.signature),
        hasMore: signatures.length > 0, // Continue as long as we get ANY signatures
        lastSignature: signatures.length > 0 ? signatures[signatures.length - 1].signature : null,
      }
    });
  } catch (error) {
    console.error('Error fetching signatures:', error);
    return NextResponse.json(
      { error: 'Failed to fetch signatures', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}