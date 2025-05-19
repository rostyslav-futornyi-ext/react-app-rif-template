import { useState, FormEvent } from 'react';

import Button from '@/components/ui/Button';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    onSubmit(email, password);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2 className={styles.loginForm__title}>Login</h2>

      {error && <div className={styles.loginForm__error}>{error}</div>}

      <div className={styles.loginForm__field}>
        <label htmlFor="email" className={styles.loginForm__label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.loginForm__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className={styles.loginForm__field}>
        <label htmlFor="password" className={styles.loginForm__label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.loginForm__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          placeholder="Enter your password"
          required
        />
      </div>

      <Button type="submit" isLoading={isLoading} isFullWidth className={styles.loginForm__submit}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
