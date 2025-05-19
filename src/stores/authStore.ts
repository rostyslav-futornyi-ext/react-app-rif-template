import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Authentication store that manages user login state
 * Uses zustand with persist middleware to save auth state to localStorage
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Mock login implementation - would connect to a real API in production
      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (email === 'user@example.com' && password === 'password') {
            const user: User = {
              id: '1',
              email: 'user@example.com',
              name: 'Demo User',
              role: 'user',
            };

            set({
              user,
              token: 'mock-jwt-token',
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              error: 'Invalid email or password',
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            error: 'An error occurred during login',
            isLoading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      signup: async (
        email: string,
        password: string, // eslint-disable-line no-unused-vars
        name: string,
      ) => {
        try {
          set({ isLoading: true, error: null });

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const user: User = {
            id: '2',
            email,
            name,
            role: 'user',
          };

          set({
            user,
            token: 'mock-jwt-token',
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: 'An error occurred during signup',
            isLoading: false,
          });
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
