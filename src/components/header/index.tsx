'use client';
import styles from './style.module.css';
import { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import NavBar from '../Navbar';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      {isActive && <NavBar />}
    </>
  );
};

export default Header;
