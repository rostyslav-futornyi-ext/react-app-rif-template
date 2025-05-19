import { DashboardStats } from '@/features/dashboard/types';

/**
 * Mock API function to fetch dashboard stats
 * This simulates a call to a backend API with an artificial delay
 */
export const fetchStats = async (): Promise<DashboardStats> =>
  // In a real application, this would call an actual API endpoint
  new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({
        activeUsers: 1248,
        totalProjects: 36,
        completionRate: 78,
        revenue: 12540,
        // Add more stats as needed
      });
    }, 1000); // 1 second delay to simulate API call
  });
