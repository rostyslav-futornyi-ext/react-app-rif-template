import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';

import { StatCard } from '@/features/dashboard/components/StatCard';
import { useStats } from '@/features/dashboard/hooks/useStats';
import styles from './Dashboard.module.scss';

/**
 * Dashboard component showing key information and statistics
 */
export const Dashboard = () => {
  const { stats, isLoading } = useStats();

  return (
    <div className="container">
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.statsGrid}>
        <StatCard
          title="Active Users"
          value={stats?.activeUsers ?? '--'}
          trend={10}
          isLoading={isLoading}
        />
        <StatCard
          title="Total Projects"
          value={stats?.totalProjects ?? '--'}
          trend={5}
          isLoading={isLoading}
        />
        <StatCard
          title="Completion Rate"
          value={`${stats?.completionRate ?? '--'}%`}
          trend={-2}
          isLoading={isLoading}
        />
        <StatCard
          title="Revenue"
          value={`$${stats?.revenue ?? '--'}`}
          trend={15}
          isLoading={isLoading}
        />
      </div>

      <div className={styles.contentSection}>
        <Tabs.Root defaultValue="overview" className={styles.tabs}>
          <Tabs.List className={styles.tabsList} aria-label="Dashboard sections">
            <Tabs.Trigger value="overview" className={styles.tabsTrigger}>
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger value="activity" className={styles.tabsTrigger}>
              Recent Activity
            </Tabs.Trigger>
            <Tabs.Trigger value="performance" className={styles.tabsTrigger}>
              Performance
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview" className={styles.tabsContent}>
            <h2>Overview</h2>
            <p>
              Welcome to your dashboard! Here you can see a summary of all your important metrics.
            </p>

            <Accordion.Root type="single" collapsible className={styles.accordion}>
              <Accordion.Item value="item-1" className={styles.accordionItem}>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  Getting Started
                </Accordion.Trigger>
                <Accordion.Content className={styles.accordionContent}>
                  <p>
                    This template provides a robust foundation for modern React applications with a
                    feature-oriented architecture.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2" className={styles.accordionItem}>
                <Accordion.Trigger className={styles.accordionTrigger}>Features</Accordion.Trigger>
                <Accordion.Content className={styles.accordionContent}>
                  <ul>
                    <li>⚡️ Vite - Lightning fast builds</li>
                    <li>🔷 TypeScript - Type safety</li>
                    <li>🎨 SCSS Modules - Component-scoped styles</li>
                    <li>🧩 BEM methodology - Consistent CSS architecture</li>
                    <li>🧰 Radix UI - Accessible headless UI components</li>
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Tabs.Content>

          <Tabs.Content value="activity" className={styles.tabsContent}>
            <h2>Recent Activity</h2>
            <p>Coming soon: Activity tracking feature.</p>
          </Tabs.Content>

          <Tabs.Content value="performance" className={styles.tabsContent}>
            <h2>Performance</h2>
            <p>Coming soon: Performance metrics.</p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Dashboard;
