import { navLinks } from '@/utils/navLinks';
import styles from './style.module.css';
import NavLink from '../NavLink';
import { motion } from 'framer-motion';
import { menuSlide } from './animation';

const NavBar = () => {
  return (
    <motion.section
      className={styles.menu}
      variants={menuSlide}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.body}>
        <nav className={styles.nav}>
          <header className={styles.header}>
            <p>Navigation</p>
          </header>
          {navLinks.map(({ title, href }, index) => (
            <NavLink key={href} href={href} title={title} index={index} />
          ))}
        </nav>
      </div>
    </motion.section>
  );
};

export default NavBar;
