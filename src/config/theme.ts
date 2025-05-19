/**
 * Theme configuration settings
 * Contains values that complement CSS variables
 */

// Main color palette
export const COLORS = {
  // Primary colors
  primary: {
    main: '#646cff',
    dark: '#535bf2',
    light: '#818cf8',
    contrastText: '#ffffff',
  },

  // Secondary colors
  secondary: {
    main: '#5a95ff',
    dark: '#4a85ef',
    light: '#6aa5ff',
    contrastText: '#ffffff',
  },

  // Accent colors
  accent: {
    main: '#ff6b6b',
    dark: '#ff5252',
    light: '#ff8585',
    contrastText: '#ffffff',
  },

  // Semantic colors
  success: {
    main: '#28a745',
    dark: '#218838',
    light: '#48c664',
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ffc107',
    dark: '#e0a800',
    light: '#ffcd39',
    contrastText: '#343a40',
  },

  error: {
    main: '#dc3545',
    dark: '#c82333',
    light: '#e25663',
    contrastText: '#ffffff',
  },

  info: {
    main: '#17a2b8',
    dark: '#138496',
    light: '#3ab7cc',
    contrastText: '#ffffff',
  },

  // Gray scale
  gray: {
    50: '#f8f9fa',
    100: '#f0f0f0',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },
};

// Spacing values (in pixels)
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

// Typography settings
export const TYPOGRAPHY = {
  fontFamily: {
    primary: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
    xxxl: '1.875rem', // 30px
    xxxxl: '2.25rem', // 36px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Animation durations
export const ANIMATION = {
  short: '0.2s',
  medium: '0.3s',
  long: '0.5s',
};

// Shadows
export const SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
};
