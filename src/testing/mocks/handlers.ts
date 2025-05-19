import { http, HttpResponse } from 'msw';

/**
 * API handlers for Mock Service Worker (MSW)
 * Use these to mock API responses in tests
 */

// Mock API base URL
const baseUrl = 'https://api.example.com';

// Mock user data
const mockUsers = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user',
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
];

// Mock dashboard data
const mockDashboardStats = {
  totalUsers: 24,
  activeUsers: 18,
  totalTransactions: 156,
  recentActivity: [
    { id: '1', type: 'signup', user: 'user123', date: '2023-01-15T14:22:18Z' },
    { id: '2', type: 'login', user: 'user456', date: '2023-01-15T15:05:41Z' },
    { id: '3', type: 'transaction', user: 'user789', date: '2023-01-15T15:42:11Z' },
  ],
};

// Define API mock handlers
export const handlers = [
  // Auth endpoints
  http.post(`${baseUrl}/auth/login`, async ({ request }) => {
    const { email, password } = (await request.json()) as { email: string; password: string };

    if (email === 'test@example.com' && password === 'password') {
      return HttpResponse.json(
        {
          token: 'mock-jwt-token',
          user: mockUsers[0],
        },
        { status: 200 },
      );
    }

    return HttpResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }),

  http.post(`${baseUrl}/auth/register`, async ({ request }) => {
    const { email, password, name } = (await request.json()) as {
      email: string;
      password: string;
      name: string;
    };

    if (email && password && name) {
      return HttpResponse.json(
        {
          token: 'mock-jwt-token',
          user: {
            id: '3',
            name,
            email,
            role: 'user',
          },
        },
        { status: 201 },
      );
    }

    return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }),

  // User endpoints
  http.get(`${baseUrl}/users/me`, ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    if (authHeader === 'Bearer mock-jwt-token') {
      return HttpResponse.json(mockUsers[0], { status: 200 });
    }

    return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }),

  // Dashboard endpoints
  http.get(`${baseUrl}/dashboard/stats`, ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    if (authHeader === 'Bearer mock-jwt-token') {
      return HttpResponse.json(mockDashboardStats, { status: 200 });
    }

    return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }),
];
