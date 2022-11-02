import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/account">
        <a>General</a>
      </Link>
      <Link href="/billing">
        <a>Billing & Payment</a>
      </Link>
      <Link href="/plan">
        <a>Plan Details</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
