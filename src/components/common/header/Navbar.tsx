'use client'
import React from "react"
import Link from "next/link";
import Translate from '../../translate/Translate'

const Navbar = () => {

    return (
        <>
          <div className="navbar bg-transparent fixed top-0 left-0 w-full z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            <li><Link href='/about'>About Us</Link></li>
                        </ul>
                    </div>
                    <Link href='' className="btn btn-ghost text-xl">Jagath Travels</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-base mr-5"><Link href='/'>Home</Link></li>
                        <li className="text-base mr-5"><Link href='/packages'>Packages</Link></li>
                        <li className="text-base mr-5"><Link href='/places'>Places</Link></li>
                        <li className="text-base mr-5"><Link href='/about'>About Us</Link></li>
                        <li className="text-base mr-5"><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Translate />
        


                </div>
            </div>
        </>
    );
};

export default Navbar