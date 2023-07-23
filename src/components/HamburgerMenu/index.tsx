'use client';
import { useState } from 'react';
import styles from './style.module.css';

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button className={styles.button} onClick={() => setIsActive(!isActive)}>
      <div
        className={`${styles.hamburger} ${
          isActive ? styles.hamburgerActive : ''
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
