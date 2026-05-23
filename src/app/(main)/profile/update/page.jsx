'use client'
import { authClient, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const ProfileUpdatePage = () => {
    const { data: session } = useSession();
    console.log(session);
    const user = session?.user;
    console.log(user);
    const handleUpdateData = async (e) => {
        e.preventDefault();
        await authClient.updateUser({
            image: e.target.photo.value,
            name: e.target.name.value,
        })

        toast.success("Profile Updated Successfully");
    }

    return (
        <div className='container mx-auto my-8 flex justify-center items-center min-h-[60vh] p-4 shadow-xl '>
            <form onSubmit={handleUpdateData} className="card w-full max-w-2xl overflow-hidden">
                <figure className='lg:w-1/3'>
                    <Image src={user?.image || "https://i.ibb.co.com/bjJh7Tsc/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg"} alt={user?.name || "Update Profile Picture"} width={200} height={200} className='rounded-2xl object-cover'></Image>
                </figure>
                <div className="card-body text-center lg:w-2/3">
                    <h2 className='font-bold text-sm md:text-xl'>Name :{user?.name || "Not Found"} </h2>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full   border p-4 items-center justify-center space-y-3">
                        <label className="fieldset-legend font-bold">Update Profile Details</label>

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Type your name here" />

                        <label className="label">Photo url</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Paste your image URL here" />

                    </fieldset>
                    <div className="card-actions justify-center mt-4">
                        <button type="submit" className="btn bg-[#F5A623]">Update Information</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdatePage;