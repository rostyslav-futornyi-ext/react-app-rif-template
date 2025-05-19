import * as Toast from '@radix-ui/react-toast';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/layout';
import { Spinner } from '@/components/ui/Spinner';

/**
 * Main application component that composes the app layout and routes
 */
export function App() {
  return (
    <Toast.Provider>
      <MainLayout>
        <Suspense
          fallback={
            <div className="flex flex--center" style={{ height: '100vh' }}>
              <Spinner size="lg" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
}
