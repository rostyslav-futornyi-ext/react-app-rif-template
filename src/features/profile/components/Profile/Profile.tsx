import * as Avatar from '@radix-ui/react-avatar';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';

import styles from './Profile.module.scss';

/**
 * Profile page component
 */
export function Profile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="container">
      <div className={styles.profileHeader}>
        <div className={styles.avatarContainer}>
          <Avatar.Root className={styles.avatarRoot}>
            <Avatar.Image
              className={styles.avatarImage}
              src="https://i.pravatar.cc/300"
              alt="User avatar"
            />
            <Avatar.Fallback className={styles.avatarFallback}>JD</Avatar.Fallback>
          </Avatar.Root>
        </div>

        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>John Doe</h1>
          <p className={styles.profileEmail}>john.doe@example.com</p>
          <p className={styles.profileBio}>
            Frontend developer passionate about React and TypeScript
          </p>

          <Button
            variant="outline"
            onClick={() => setIsDialogOpen(true)}
            className={styles.editButton}
          >
            Edit Profile
          </Button>
        </div>
      </div>

      <div className={styles.profileContent}>
        <Tabs.Root defaultValue="overview" className={styles.tabs}>
          <Tabs.List className={styles.tabsList}>
            <Tabs.Trigger value="overview" className={styles.tabsTrigger}>
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger value="settings" className={styles.tabsTrigger}>
              Settings
            </Tabs.Trigger>
            <Tabs.Trigger value="security" className={styles.tabsTrigger}>
              Security
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview" className={styles.tabsContent}>
            <h2>Profile Overview</h2>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1,234</span>
                <span className={styles.statLabel}>Followers</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>567</span>
                <span className={styles.statLabel}>Following</span>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="settings" className={styles.tabsContent}>
            <h2>Profile Settings</h2>
            <p>Settings will be available in a future update.</p>
          </Tabs.Content>

          <Tabs.Content value="security" className={styles.tabsContent}>
            <h2>Security Settings</h2>
            <p>Security settings will be available in a future update.</p>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.dialogOverlay} />
          <Dialog.Content className={styles.dialogContent}>
            <Dialog.Title className={styles.dialogTitle}>Edit Profile</Dialog.Title>
            <Dialog.Description className={styles.dialogDescription}>
              Update your profile information below.
            </Dialog.Description>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" defaultValue="John Doe" className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  defaultValue="Frontend developer passionate about React and TypeScript"
                  className={styles.textarea}
                />
              </div>
            </form>

            <div className={styles.dialogFooter}>
              <Dialog.Close asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.Close>
              <Button variant="primary">Save Changes</Button>
            </div>

            <Dialog.Close asChild>
              <button className={styles.closeButton} aria-label="Close">
                ×
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default Profile;
