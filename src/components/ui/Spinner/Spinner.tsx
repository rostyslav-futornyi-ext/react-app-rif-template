import { HTMLAttributes } from 'react';

import styles from './Spinner.module.scss';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;
}

/**
 * Spinner component for loading states
 */
export const Spinner = ({ size = 'md', className = '', ...rest }: SpinnerProps) => {
  const spinnerClasses = [styles.spinner, styles[`spinner--${size}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={spinnerClasses} role="status" aria-label="Loading" {...rest}>
      <span className={styles.visuallyHidden}>Loading...</span>
    </div>
  );
};
