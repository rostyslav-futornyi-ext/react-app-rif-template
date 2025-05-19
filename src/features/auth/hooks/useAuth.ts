import { useState } from 'react';

import { loginUser } from '@/features/auth/api/authApi';
import { User } from '@/features/auth/types';

interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Hook for authentication features
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would call a real API
      const userData = await loginUser(credentials);
      setUser(userData);

      // Store auth token in localStorage or secure cookie in a real app
      localStorage.setItem('auth_token', userData.token);

      return userData;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to login. Please try again.';

      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
