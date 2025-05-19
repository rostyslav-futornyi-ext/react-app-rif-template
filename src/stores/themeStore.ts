/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Theme store to manage application theme
 * Persists theme preference to localStorage
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // Initialize with system preference or default to light
      theme:
        typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',

      // Set theme directly
      setTheme: (theme) => {
        set({ theme });
        // Update DOM
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme);
        }
      },

      // Toggle between light and dark
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          // Update DOM
          if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme);
          }
          return { theme: newTheme };
        });
      },
    }),
    {
      name: 'theme-storage', // localStorage key
    },
  ),
);
