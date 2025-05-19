/**
 * Utility functions for validating data
 */

/**
 * Check if a string is a valid email address
 * @param email Email to validate
 * @returns Boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if a string is a valid URL
 * @param url URL to validate
 * @returns Boolean indicating if the URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if a password meets minimum strength requirements
 * @param password Password to validate
 * @param options Validation options
 * @returns Boolean indicating if the password is strong enough
 */
export const isStrongPassword = (
  password: string,
  options = {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
): boolean => {
  if (password.length < options.minLength) return false;

  if (options.requireUppercase && !/[A-Z]/.test(password)) return false;
  if (options.requireLowercase && !/[a-z]/.test(password)) return false;
  if (options.requireNumbers && !/[0-9]/.test(password)) return false;
  if (options.requireSpecialChars && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password))
    return false;

  return true;
};

/**
 * Validates that a value is not empty (null, undefined, empty string, or empty array)
 * @param value Value to check
 * @returns Boolean indicating if the value is not empty
 */
export const isNotEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};
