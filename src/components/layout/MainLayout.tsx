import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import rifLogo from '@/assets/logo.svg';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container flex flex--between">
          <Link to="/" className={styles.logoLink}>
            <img src={rifLogo} alt="RIF Logo" className={styles.logo} />
            <span className={styles.title}>RIF App Template</span>
          </Link>

          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
              end
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Profile
            </NavLink>
            <ThemeToggle />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={styles.menuButton}>Menu</DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.menuContent}>
                  <DropdownMenu.Item className={styles.menuItem}>
                    <Link to="/login">Login</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className={styles.menuSeparator} />
                  <DropdownMenu.Item className={styles.menuItem}>
                    <Link to="https://github.com/rsksmart/react-app-rif-template" target="_blank">
                      GitHub
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} RIF App Template</p>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
