'use client';
import styles from './style.module.css';
import { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import NavBar from '../Navbar';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      <AnimatePresence>{isActive && <NavBar />}</AnimatePresence>
    </>
  );
};

export default Header;
