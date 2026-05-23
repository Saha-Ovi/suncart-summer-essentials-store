'use client'
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = useSession();
    console.log(session);
    const user = session?.user;
    console.log(user);
    
    return (
        <div className='container mx-auto my-8 px-4'>
            <div className="card lg:card-side bg-base-100 shadow-sm max-w-2xl mx-auto items-center p-4 lg:p-0">
                <figure className="w-full lg:w-auto flex justify-center pt-6 lg:pt-0 lg:pl-6">
                    <Image 
                        src={user?.image || "https://i.ibb.co.com/bjJh7Tsc/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" } 
                        alt={user?.name || "Update Profile Picture"} 
                        width={200} 
                        height={200} 
                        className='rounded-2xl object-cover shadow-md'
                        priority
                    />
                </figure>
                <div className="card-body text-center lg:text-left">
                    <h2 className="text-xl md:text-3xl font-bold">Name : {user?.name || 'N/A'}</h2>
                    <p className='text-sm md:text-xl font-medium text-base-content/70'>Email : {user?.email || 'N/A'}</p>
                    <div className="card-actions justify-center lg:justify-start mt-2">
                        <Link href={'/profile/update'}>
                            <button className="btn bg-[#F5A623] text-white hover:bg-[#e0951b] border-none">
                                Update Information
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
