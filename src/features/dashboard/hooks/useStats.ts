import { useState, useEffect } from 'react';

import { fetchStats } from '@/features/dashboard/api/dashboardApi';
import { DashboardStats } from '@/features/dashboard/types';

/**
 * Hook for fetching dashboard statistics
 */
export const useStats = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStats();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch stats'));
        console.error('Error fetching stats:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getStats();
  }, []);

  return {
    stats,
    isLoading,
    error,
  };
};
