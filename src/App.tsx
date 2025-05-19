import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

import styles from './App.module.scss';
import rifLogo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={rifLogo} className={styles.logo} alt="RIF logo" />
        <h1>RIF React App Template</h1>
      </header>

      <Tabs.Root className={styles.tabs} defaultValue="welcome">
        <Tabs.List className={styles.tabsList} aria-label="Explore the template">
          <Tabs.Trigger className={styles.tabsTrigger} value="welcome">
            Welcome
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.tabsTrigger} value="features">
            Features
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.tabsTrigger} value="counter">
            Counter Demo
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className={styles.tabsContent} value="welcome">
          <h2>Welcome to RIF React App Template</h2>
          <p>
            This is a modern React template built with Vite, TypeScript, SCSS Modules, and Radix UI
            components. Edit <code>src/App.tsx</code> and save to see your changes.
          </p>
          <p>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              Vite
            </a>{' '}
            |{' '}
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              React
            </a>{' '}
            |{' '}
            <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
              TypeScript
            </a>{' '}
            |{' '}
            <a href="https://www.radix-ui.com" target="_blank" rel="noreferrer">
              Radix UI
            </a>
          </p>
        </Tabs.Content>

        <Tabs.Content className={styles.tabsContent} value="features">
          <h2>Template Features</h2>
          <ul className={styles.featureList}>
            <li>⚡️ Vite - Lightning fast builds</li>
            <li>🔷 TypeScript - Type safety</li>
            <li>🎨 SCSS Modules - Component-scoped styles</li>
            <li>🧩 BEM methodology - Consistent CSS architecture</li>
            <li>🧰 Radix UI - Accessible headless UI components</li>
            <li>✅ Vitest - Modern testing framework</li>
            <li>🔍 ESLint + Prettier - Code quality</li>
            <li>📂 Feature-oriented folder structure</li>
            <li>🔄 GitHub Actions - CI/CD workflows</li>
          </ul>
        </Tabs.Content>

        <Tabs.Content className={styles.tabsContent} value="counter">
          <h2>Counter Example</h2>
          <div className={styles.card}>
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <p>
              Edit <code>src/App.tsx</code> to test hot module replacement.
            </p>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default App;
