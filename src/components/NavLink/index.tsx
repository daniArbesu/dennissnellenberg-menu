import styles from './style.module.css';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
}

const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <Link className={styles.link} href={href}>
      {title}
    </Link>
  );
};

export default NavLink;
