'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    // console.log(pathName);
    const { data: session, isPending } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);
    return (
        <div className='shadow-sm my-2'>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'} className={`${pathName === '/' ? 'bg-[#F5A623] text-black' : " "}`}>Home</Link></li>
                            <li><Link href={'/product'} className={`${pathName === '/product' ? 'bg-[#F5A623] text-black' : " "}`}>Product</Link></li>
                            <li><Link href={'/profile'} className={`${pathName === '/profile' ? 'bg-[#F5A623] text-black' : " "}`}>Profile</Link></li>
                        </ul>
                    </div>
                    <a className="text-xl font-extrabold"><span className='text-[#1A1410]'>Sun</span><span className='text-[#F5A623]'>Cart ☀️</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/'} className={`${pathName === '/' ? 'bg-[#F5A623] text-black' : " "}`}>Home</Link></li>
                        <li><Link href={'/product'} className={`${pathName === '/product' ? 'bg-[#F5A623] text-black' : " "}`}>Product</Link></li>
                        <li><Link href={'/profile'} className={`${pathName === '/profile' ? 'bg-[#F5A623] text-black' : " "}`}>Profile</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-2  ">
                    {
                        isPending ? (<span className="loading loading-spinner loading-lg"></span>)
                            : user ? (
                            <div className='flex items-center gap-2'>
                                <h2 className='text-xs md:text-lg'>{user.name}</h2>
                                <Image className='rounded-full' src={user.image} alt={user.name} height={30} width={30}></Image>
                                <button onClick={async ()=> await authClient.signOut()} className='btn bg-[#F5A623] text-black rounded-full'>Logout</button>
                            </div>
                        )
                             : (
                             <div className='flex items-center gap-2'>
                                <Link href={'/login'} className='btn bg-base-100 text-black rounded-full'>Login</Link>
                                <Link href={'/register'} className='btn bg-[#F5A623] text-black rounded-full'>Register</Link>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;