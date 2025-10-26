import { useState, useEffect } from 'react';

interface TipData {
  tipAddress: string;
  currentBalance: number;
  totalTransactions: number;
  totalTipsReceived: number;
  uniqueUsers: number;
  avgTipAmount: number;
  recentActivity: {
    last24h: number;
    last7d: number;
    last30d: number;
  };
  recentTransactions: Array<{
    signature: string;
    blockTime: number;
    sender: string;
    amount: number;
    fee: number;
  }>;
  lastUpdated: string;
}

interface UseTipDataReturn {
  data: TipData | null;
  loading: boolean;
  error: Error | null;
}

export function useTipData(refreshInterval: number = 300000): UseTipDataReturn {
  const [data, setData] = useState<TipData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTipData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/tips');
        
        if (!response.ok) {
          throw new Error('Failed to fetch tip data');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setData(result.data);
          setError(null);
        } else {
          throw new Error(result.error || 'Invalid response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error fetching tip data:', err);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchTipData();

    // Set up refresh interval
    const interval = setInterval(fetchTipData, refreshInterval);

    // Cleanup
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { data, loading, error };
}