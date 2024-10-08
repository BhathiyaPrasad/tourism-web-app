'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Translate from '../../translate/Translate';
import Image from "next/image";
import Logo from '../../../../public/assets/jagathlogo3.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolls = window.scrollY;
     
      if (scrolls < 300) {
        setScroll(false);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);  // Hide the navbar
      } else {
        setIsVisible(true);
        setScroll(true);   // Show the navbar
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar fixed top-0 left-0 w-full transition-all duration-300 ease-in-out ${styles.navbarCustom} 
      ${isVisible ? 'z-10' : '-z-10'} ${(scroll && isVisible) ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-md' : 'bg-transparent'}`}>
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${styles.dropdownButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg transition-transform transform origin-top duration-200 ease-in-out">
            <li><Link href='/'>HOME</Link></li>
            <li><Link href='/packages'>PACKAGES</Link></li>
            <li><Link href='/places'>PLACES</Link></li>
            <li><Link href='/about'>ABOUT US</Link></li>
            <li><Link href='/contact'>CONTACT</Link></li>
          </ul>
        </div>
        <Link href='/' className={`${styles.logoLink}`}>
  <Image
    className={`${styles.logo} transition-all duration-300 ease-in-out ${isVisible ? 'h-12 w-auto' : 'h-8 w-auto'}`}
    src={Logo}
    alt='Jagath Travels Logo'
  />
</Link>

      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-semibold">
          <li className={styles.menuItem}><Link href='/'>HOME</Link></li>
          <li className={styles.menuItem}><Link href='/packages'>PACKAGES</Link></li>
          <li className={styles.menuItem}><Link href='/places'>PLACES</Link></li>
          <li className={styles.menuItem}><Link href='/about'>ABOUT US</Link></li>
          <li className={styles.menuItem}><Link href='/contact'>CONTACT</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <Translate />
      </div>
    </div>
  );
};

export default Navbar;
