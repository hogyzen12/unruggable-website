import { useState, useEffect, useCallback } from 'react';

interface ProgressiveTipData {
  totalTransactions: number;
  progress: number; // 0-100
  isLoading: boolean;
  error: Error | null;
}

export function useProgressiveTipData() {
  const [data, setData] = useState<ProgressiveTipData>({
    totalTransactions: 0,
    progress: 0,
    isLoading: false,
    error: null,
  });

  const fetchAllData = useCallback(async () => {
    setData(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Fetch all signatures progressively - NO CACHING
      const allSignatures: string[] = [];
      let before: string | undefined = undefined;
      let batchCount = 0;

      while (true) {
        batchCount++;
        console.log(`Fetching batch ${batchCount}, total so far: ${allSignatures.length}`);
        
        const response: Response = await fetch(`/api/tips/signatures?limit=1000${before ? `&before=${before}` : ''}`);
        const result = await response.json();

        if (!result.success) {
          console.error('API error:', result);
          break;
        }

        const signatures = result.data.signatures;
        console.log(`Batch ${batchCount} returned ${signatures.length} signatures`);

        // Stop when we get 0 signatures
        if (signatures.length === 0) {
          console.log('No more signatures - stopping');
          break;
        }

        allSignatures.push(...signatures);
        before = result.data.lastSignature;

        // Update progress
        const progress = Math.min(95, (allSignatures.length / 1000) * 3);

        setData({
          totalTransactions: allSignatures.length,
          progress: progress,
          isLoading: true,
          error: null,
        });

        // Rate limit: 500ms between requests = 2 req/sec
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      const totalSigs = allSignatures.length;
      const firstSig = allSignatures[0];
      const lastSig = allSignatures[allSignatures.length - 1];
      
      console.log('========================================');
      console.log('✓ FINISHED FETCHING ALL TRANSACTIONS');
      console.log(`Total transactions: ${totalSigs.toLocaleString()}`);
      console.log(`First signature: ${firstSig}`);
      console.log(`Last signature: ${lastSig}`);
      console.log('========================================');

      // Final update
      setData({
        totalTransactions: totalSigs,
        progress: 100,
        isLoading: false,
        error: null,
      });

    } catch (err) {
      console.error('Error fetching signatures:', err);
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err : new Error('Unknown error'),
      }));
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return data;
}