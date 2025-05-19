/**
 * Utility functions for working with browser storage
 */

/**
 * Save data to localStorage with optional expiration
 * @param key Storage key
 * @param value Data to store
 * @param expirationMs Expiration time in milliseconds (optional)
 */
export const setStorageItem = <T>(key: string, value: T, expirationMs?: number): void => {
  try {
    const item = {
      value,
      expiry: expirationMs ? new Date().getTime() + expirationMs : null,
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
};

/**
 * Get data from localStorage, respecting expiration
 * @param key Storage key
 * @returns Stored data or null if expired/not found
 */
export const getStorageItem = <T>(key: string): T | null => {
  try {
    const itemStr = localStorage.getItem(key);

    // Return null if item doesn't exist
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);

    // Check for expiration
    if (item.expiry && new Date().getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value as T;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return null;
  }
};

/**
 * Remove an item from localStorage
 * @param key Storage key
 */
export const removeStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing localStorage item:', error);
  }
};

/**
 * Clear all items from localStorage
 */
export const clearStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
