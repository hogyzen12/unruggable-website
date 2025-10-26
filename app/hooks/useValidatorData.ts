import { useState, useEffect, useCallback } from 'react';

interface ValidatorData {
  validatorAddress: string;
  balance: number;
  activatedStake: number;
  totalValueUSD: number;
  solPrice: number;
  commission: number;
  epochInfo: {
    epoch: number;
    slotIndex: number;
    slotsInEpoch: number;
  };
  lastUpdated: string;
}

interface UseValidatorDataReturn {
  data: ValidatorData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useValidatorData(refreshInterval: number = 60000): UseValidatorDataReturn {
  const [data, setData] = useState<ValidatorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/validator', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setData(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch validator data');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching validator data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling interval if specified
    if (refreshInterval > 0) {
      const interval = setInterval(() => {
        fetchData();
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [fetchData, refreshInterval]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}