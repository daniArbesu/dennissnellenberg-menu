import styles from './style.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from './animation';

interface Props {
  title: string;
  href: string;
}

const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <motion.div variants={slide} initial="initial" animate="animate" exit="exit">
      <Link className={styles.link} href={href}>
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
