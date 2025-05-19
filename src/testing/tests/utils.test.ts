import { formatDate, formatCurrency, truncateText, formatFileSize } from '@/utils/format';
import { setStorageItem, getStorageItem, removeStorageItem } from '@/utils/storage';
import { isValidEmail, isStrongPassword } from '@/utils/validation';

// Mock localStorage for tests
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Replace the global localStorage with our mock
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Format utility tests
describe('Format utilities', () => {
  // Date formatting tests
  describe('formatDate', () => {
    test('formats date object correctly', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      expect(formatDate(date)).toBe('May 15, 2023');
    });

    test('formats date string correctly', () => {
      expect(formatDate('2023-05-15T12:00:00Z')).toBe('May 15, 2023');
    });

    test('formats timestamp correctly', () => {
      const timestamp = new Date('2023-05-15T12:00:00Z').getTime();
      expect(formatDate(timestamp)).toBe('May 15, 2023');
    });

    test('accepts custom format options', () => {
      const date = new Date('2023-05-15T12:00:00Z');
      expect(
        formatDate(date, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      ).toBe('May 15, 2023');
    });
  });

  // Currency formatting tests
  describe('formatCurrency', () => {
    test('formats currency correctly with default settings', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    test('formats currency with custom currency code', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });

    test('formats currency with custom locale', () => {
      expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toMatch(/1.234,56/);
    });
  });

  // Text truncation tests
  describe('truncateText', () => {
    test('truncates text longer than max length', () => {
      expect(truncateText('This is a long text that needs truncation', 10)).toBe('This is a...');
    });

    test('does not truncate text shorter than max length', () => {
      expect(truncateText('Short text', 20)).toBe('Short text');
    });

    test('truncates text exactly at max length', () => {
      expect(truncateText('Exactly 15 chars', 15)).toBe('Exactly 15 char...');
    });
  });

  // File size formatting tests
  describe('formatFileSize', () => {
    test('formats bytes correctly', () => {
      expect(formatFileSize(500)).toBe('500 Bytes');
    });

    test('formats kilobytes correctly', () => {
      expect(formatFileSize(1024)).toBe('1 KB');
    });

    test('formats megabytes correctly', () => {
      expect(formatFileSize(1048576)).toBe('1 MB');
    });

    test('formats gigabytes correctly', () => {
      expect(formatFileSize(1073741824)).toBe('1 GB');
    });

    test('handles custom decimal places', () => {
      expect(formatFileSize(1536, 1)).toBe('1.5 KB');
      expect(formatFileSize(1536, 3)).toBe('1.5 KB');
    });
  });
});

// Validation utility tests
describe('Validation utilities', () => {
  // Email validation tests
  describe('isValidEmail', () => {
    test('accepts valid email addresses', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('user.name@example.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    test('rejects invalid email addresses', () => {
      expect(isValidEmail('user')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@example')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  // Password validation tests
  describe('isStrongPassword', () => {
    test('validates password with default requirements', () => {
      expect(isStrongPassword('Abcd1234!')).toBe(true);
      expect(isStrongPassword('weakpass')).toBe(false);
    });

    test('validates password with custom requirements', () => {
      const options = {
        minLength: 6,
        requireUppercase: false,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: false,
      };

      expect(isStrongPassword('abcd123', options)).toBe(true);
      expect(isStrongPassword('abcdef', options)).toBe(false); // No numbers
    });
  });
});

// Storage utility tests
describe('Storage utilities', () => {
  // Clear localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  describe('setStorageItem and getStorageItem', () => {
    test('stores and retrieves string value', () => {
      setStorageItem('testKey', 'testValue');
      expect(getStorageItem('testKey')).toBe('testValue');
    });

    test('stores and retrieves object value', () => {
      const testObject = { name: 'Test', value: 123 };
      setStorageItem('testObject', testObject);
      expect(getStorageItem('testObject')).toEqual(testObject);
    });

    test('returns null for non-existent key', () => {
      expect(getStorageItem('nonExistentKey')).toBeNull();
    });

    test('handles item expiration', () => {
      jest.useFakeTimers();

      // Set item with 1000ms expiration
      setStorageItem('expiringItem', 'value', 1000);
      expect(getStorageItem('expiringItem')).toBe('value');

      // Advance time beyond expiration
      jest.advanceTimersByTime(1500);
      expect(getStorageItem('expiringItem')).toBeNull();

      jest.useRealTimers();
    });
  });

  describe('removeStorageItem', () => {
    test('removes an item from storage', () => {
      setStorageItem('testKey', 'testValue');
      expect(getStorageItem('testKey')).toBe('testValue');

      removeStorageItem('testKey');
      expect(getStorageItem('testKey')).toBeNull();
    });

    test('does nothing when removing non-existent item', () => {
      removeStorageItem('nonExistentKey');
      expect(getStorageItem('nonExistentKey')).toBeNull();
    });
  });
});
