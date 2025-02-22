"use client"
import React from 'react';
import logo from "../../../../public/Assest/Image/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session, status } = useSession();
    console.log(session);

    return (

        <div className='container sticky z-10'>
            <div className="navbar">
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
                            className="menu menu-md text-lg font-semibold text-white dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li> <Link href={'/'}>Home</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/courses'}>Courses</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                            <li><Link href={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <Image src={logo} alt='logo'></Image>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg font-semibold text-white menu-horizontal px-1">
                        <li> <Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/courses'}>Courses</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                        <li><Link href={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end text-lg font-semibold text-white">
                    <Search className='mr-4'></Search>

                    {
                        status === "authenticated" ? <>
                            <button onClick={() => signOut()}>Logout</button>
                        </> : <>
                            <Link className='btn mr-5' href={'/login'}>Login</Link>
                            <Link className='btn mr-5' href={'/register'}>Signup</Link>
                        </>
                    }

                </div>
            </div>
        </div>

    );
};

export default Navbar;