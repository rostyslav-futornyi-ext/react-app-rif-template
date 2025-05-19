/**
 * Represents a user in the system
 */
export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

/**
 * Authentication state interface
 */
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
