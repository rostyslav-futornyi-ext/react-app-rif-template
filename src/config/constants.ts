/**
 * Application-wide constants
 */

// App info
export const APP_NAME = 'RIF App Template';
export const APP_VERSION = '1.0.0';
export const COPYRIGHT_YEAR = new Date().getFullYear();

// API endpoints and configuration
export const API = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.example.com',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH_TOKEN: '/auth/refresh-token',
    },
    USERS: {
      ME: '/users/me',
      PROFILE: '/users/profile',
    },
    DASHBOARD: {
      STATS: '/dashboard/stats',
      RECENT_ACTIVITY: '/dashboard/activity',
    },
  },
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Date formats
export const DATE_FORMATS = {
  SHORT: 'MM/DD/YYYY',
  DISPLAY: 'MMMM D, YYYY',
  TIME: 'h:mm A',
  DATETIME: 'MMMM D, YYYY h:mm A',
  ISO: 'YYYY-MM-DD',
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  OPTIONS: [5, 10, 25, 50, 100],
};

// Validation rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 50,
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

// Feature flags
export const FEATURES = {
  DARK_MODE: true,
  NOTIFICATIONS: true,
  ANALYTICS: process.env.NODE_ENV === 'production',
  ADVANCED_SETTINGS: false,
};
