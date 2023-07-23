'use client';
import { useState } from 'react';
import styles from './style.module.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.button}>
      <div className={styles.hamburger}></div>
    </div>
  );
};

export default Header;
