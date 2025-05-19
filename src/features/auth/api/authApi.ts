import { User } from '@/features/auth/types';

/**
 * Simulates a login API request with artificial delay
 */
export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  // This is a mock implementation - in a real app this would call an actual API
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simple validation
      if (!email || !password) {
        reject(new Error('Email and password are required'));
        return;
      }

      // Mock successful login for demo purposes
      // In a real app, this would validate credentials against a backend
      if (email === 'demo@example.com' && password === 'password') {
        resolve({
          id: '1',
          email,
          name: 'Demo User',
          token: 'mock-jwt-token',
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000); // 1 second delay to simulate API call
  });
};
