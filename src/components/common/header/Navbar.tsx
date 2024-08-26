'use client'
import React from "react";
import Link from "next/link";
import Translate from '../../translate/Translate';
import Image from "next/image";
import Logo from '../../../../public/assets/jagathlogo3.png';
import styles from './Navbar.module.css';  // Import the CSS module

const Navbar = () => {
    return (
        <>
            <div className={`navbar fixed top-0 left-0 w-full z-10 ${styles.navbarCustom}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${styles.dropdownButton}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/packages'>Packages</Link></li>
                            <li><Link href='/places'>Places</Link></li>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className={`${styles.logoLink}`}>
                        <Image className={styles.logo} src={Logo} alt='Jagath Travels Logo' />
                        <span className="ml-2"></span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className={styles.menuItem}><Link href='/'>Home</Link></li>
                        <li className={styles.menuItem}><Link href='/packages'>Packages</Link></li>
                        <li className={styles.menuItem}><Link href='/places'>Places</Link></li>
                        <li className={styles.menuItem}><Link href='/about'>About Us</Link></li>
                        <li className={styles.menuItem}><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Translate />
                </div>
            </div>
        </>
    );
};

export default Navbar;
