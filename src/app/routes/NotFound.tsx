import { Link, useRouteError } from 'react-router-dom';
import * as Alert from '@radix-ui/react-alert-dialog';

import { Button } from '@/components/ui/Button';

/**
 * NotFound page that handles both 404s and other route errors
 */
export const NotFound = () => {
  const error = useRouteError();
  const errorMessage = error instanceof Error ? error.message : 'Page not found';

  return (
    <div className="container flex flex--center" style={{ height: '100vh' }}>
      <Alert.Root defaultOpen>
        <Alert.Portal>
          <Alert.Overlay className="alert-overlay" />
          <Alert.Content className="alert-content">
            <Alert.Title className="alert-title">Oops! Something went wrong</Alert.Title>
            <Alert.Description className="alert-description">{errorMessage}</Alert.Description>
            <div className="alert-footer">
              <Link to="/">
                <Button variant="primary">Go back home</Button>
              </Link>
            </div>
          </Alert.Content>
        </Alert.Portal>
      </Alert.Root>
    </div>
  );
};

export default NotFound;
