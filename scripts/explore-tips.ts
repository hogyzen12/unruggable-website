import { Connection, PublicKey } from '@solana/web3.js';

const TIP_ADDRESS = 'juLesoSmdTcRtzjCzYzRoHrnF8GhVu6KCV7uxq7nJGp';
const RPC_ENDPOINT = 'https://johna-k3cr1v-fast-mainnet.helius-rpc.com';

async function exploreTipAddress() {
  const connection = new Connection(RPC_ENDPOINT, 'confirmed');
  const tipPubkey = new PublicKey(TIP_ADDRESS);

  console.log('Fetching account info...');
  const accountInfo = await connection.getAccountInfo(tipPubkey);
  console.log('Account balance:', accountInfo?.lamports);

  console.log('\nFetching recent signatures...');
  const signatures = await connection.getSignaturesForAddress(tipPubkey, {
    limit: 10,
  });
  
  console.log(`Found ${signatures.length} recent signatures`);
  console.log('\nFirst signature details:', JSON.stringify(signatures[0], null, 2));

  if (signatures.length > 0) {
    console.log('\nFetching first transaction details...');
    const tx = await connection.getTransaction(signatures[0].signature, {
      maxSupportedTransactionVersion: 0,
    });
    
    console.log('\nTransaction details:');
    console.log('- Block time:', tx?.blockTime);
    console.log('- Fee:', tx?.meta?.fee);
    console.log('- Pre balances:', tx?.meta?.preBalances);
    console.log('- Post balances:', tx?.meta?.postBalances);
    console.log('- Account keys:', tx?.transaction.message.getAccountKeys().staticAccountKeys.map(k => k.toBase58()));
  }
}

exploreTipAddress().catch(console.error);