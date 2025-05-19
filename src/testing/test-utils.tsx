import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/theme';

/**
 * Custom render function with wrapped providers
 * Use this instead of the default render from @testing-library/react
 */

// Create a custom render that includes our providers
interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  route?: string; // Optional route to set for router
}

/**
 * All providers wrapper component
 */
export function AllProviders({ children }: { children: ReactNode }) {
  // Create a new QueryClient for each test
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // don't retry failed queries in tests
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

/**
 * Custom render function that wraps components with necessary providers
 */
export const renderWithProviders = (ui: ReactElement, options?: CustomRenderOptions) => {
  // Set up window.location for router tests
  if (options?.route) {
    window.history.pushState({}, 'Test page', options.route);
  }

  return {
    ...render(ui, { wrapper: AllProviders, ...options }),
    // Return userEvent for convenience
    user: userEvent.setup(),
  };
};

/**
 * Re-export everything from testing-library
 */
export * from '@testing-library/react';
export { userEvent, renderWithProviders as render };
