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
        <div className='container mx-auto my-8 '>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                   <Image src={user?.image || "https://i.ibb.co.com/bjJh7Tsc/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" } alt={user?.name || "Update Profile Picture"} width={200} height={200} className='rounded-2xl'></Image>
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-xl md:text-3xl font-bold">Name  : {user?.name}</h2>
                    <p className='text-sm md:text-xl font-medium'>Email : {user?.email}</p>
                    <div className="card-actions justify-center">
                        <Link href={'/profile/update'}><button className="btn bg-[#F5A623]">Update Information</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfilePage;