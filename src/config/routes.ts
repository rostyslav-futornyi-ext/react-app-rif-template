/**
 * Application routes configuration
 */

// Route paths
export const ROUTES = {
  // Public routes
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Protected routes
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',

  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin',
    USERS: '/admin/users',
    SETTINGS: '/admin/settings',
  },

  // 404 and error routes
  NOT_FOUND: '/404',
  ERROR: '/error',
};

// Navigation items for main navigation
export const MAIN_NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'dashboard',
    order: 1,
  },
  {
    label: 'Profile',
    path: ROUTES.PROFILE,
    icon: 'profile',
    order: 2,
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
    icon: 'settings',
    order: 3,
  },
];

// Navigation items for admin panel
export const ADMIN_NAV_ITEMS = [
  {
    label: 'Admin Dashboard',
    path: ROUTES.ADMIN.DASHBOARD,
    icon: 'admin-dashboard',
    order: 1,
  },
  {
    label: 'Manage Users',
    path: ROUTES.ADMIN.USERS,
    icon: 'users',
    order: 2,
  },
  {
    label: 'Admin Settings',
    path: ROUTES.ADMIN.SETTINGS,
    icon: 'admin-settings',
    order: 3,
  },
];

// Route configuration for authentication requirements
export const ROUTE_CONFIG = {
  // Public routes that don't require authentication
  publicRoutes: [
    ROUTES.HOME,
    ROUTES.LOGIN,
    ROUTES.REGISTER,
    ROUTES.FORGOT_PASSWORD,
    ROUTES.RESET_PASSWORD,
    ROUTES.NOT_FOUND,
    ROUTES.ERROR,
  ],

  // Routes that require authentication
  protectedRoutes: [ROUTES.DASHBOARD, ROUTES.PROFILE, ROUTES.SETTINGS],

  // Routes that require admin role
  adminRoutes: [ROUTES.ADMIN.DASHBOARD, ROUTES.ADMIN.USERS, ROUTES.ADMIN.SETTINGS],
};
