import { navLinks } from '@/utils/navLinks';
import styles from './style.module.css';
import NavLink from '../NavLink';

const NavBar = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <header className={styles.header}>
            <p>Navigation</p>
          </header>
          {navLinks.map(({ title, href }) => (
            <NavLink key={href} href={href} title={title} />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
