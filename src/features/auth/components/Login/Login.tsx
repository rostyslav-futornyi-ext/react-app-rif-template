import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';

import { LoginForm } from '@/features/auth/components/LoginForm';
import { useAuth } from '@/features/auth/hooks/useAuth';
import styles from './Login.module.scss';

/**
 * Login page component that provides user authentication
 */
export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex flex--center">
      <div className={styles.loginContainer}>
        <Tabs.Root defaultValue="login" className={styles.tabs}>
          <Tabs.List className={styles.tabsList}>
            <Tabs.Trigger value="login" className={styles.tabsTrigger}>
              Login
            </Tabs.Trigger>
            <Tabs.Trigger value="register" className={styles.tabsTrigger}>
              Register
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="login" className={styles.tabsContent}>
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </Tabs.Content>

          <Tabs.Content value="register" className={styles.tabsContent}>
            <div className={styles.comingSoon}>
              <h3>Coming Soon</h3>
              <p>Registration feature is under development.</p>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Login;
