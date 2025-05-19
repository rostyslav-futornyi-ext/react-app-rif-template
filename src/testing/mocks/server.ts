import { setupServer } from 'msw/node';

import { handlers } from './handlers';

/**
 * Setup MSW server for API mocking in tests
 */
export const server = setupServer(...handlers);

// Example usage in Vitest setup:
/*
// In setupTests.ts:
import { server } from './testing/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
*/
