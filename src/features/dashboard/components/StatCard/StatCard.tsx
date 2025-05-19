import * as Tooltip from '@radix-ui/react-tooltip';

import { Spinner } from '@/components/ui/Spinner';

import styles from './StatCard.module.scss';

export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  isLoading?: boolean;
}

/**
 * StatCard component for displaying metrics with optional trend indicators
 */
export function StatCard({ title, value, trend, isLoading = false }: StatCardProps) {
  // Determine trend direction styles
  const trendClass = trend ? (trend > 0 ? styles.trendUp : styles.trendDown) : '';

  // Format trend display
  const trendDisplay = trend ? `${trend > 0 ? '+' : ''}${trend}%` : null;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger className={styles.infoIcon}>?</Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className={styles.tooltipContent}>
                <p>Statistics for {title.toLowerCase()}</p>
                <Tooltip.Arrow className={styles.tooltipArrow} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <div className={styles.content}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <Spinner size="sm" />
          </div>
        ) : (
          <>
            <div className={styles.value}>{value}</div>
            {trendDisplay && <div className={`${styles.trend} ${trendClass}`}>{trendDisplay}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default StatCard;
