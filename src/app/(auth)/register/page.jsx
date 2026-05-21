'use client'

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const [isPassword, setIsPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const handleFunction = (data) => {
        console.log(data, "data");


    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-4 my-8'>
            <div>
                <form onSubmit={handleSubmit(handleFunction)} className='space-y-4'>
                    <h2 className='text-center font-bold text-md md:text-xl'>Welcome to <span className='text-[#1A1410]'>Sun</span><span className='text-[#F5A623]'>Cart ☀️</span></h2>
                    <h2 className='text-center font-bold text-xl md:text-3xl'>Register Your Account</h2>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-xl border p-10 space-y-4 ">


                        <div className='space-y-2'>
                            <label className="label">Name</label>
                            <input type="text" className="input w-full rounded-2xl p-4" {...register("name", { required: "Name field is required" })} placeholder="Type Your Name Here" />
                            {
                                errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>
                            }
                        </div >
                        <div className='space-y-2'>
                            <label className="label">Email</label>
                            <input type="email" className="input w-full rounded-2xl p-4" {...register("email", { required: "Email field is required" })} placeholder="Type Your Email Here" />
                            {
                                errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>
                            }
                        </div>
                        <div className='space-y-2'>
                            <label className="label">Photo Url</label>
                            <input type="text" className="input w-full rounded-2xl p-4" {...register("photo", { required: "Photo url field is required" })} placeholder="Type Your Photo url Here" />
                            {
                                errors.email && <p className='text-red-500 text-xs'>{errors.photo.message}</p>
                            }

                        </div>
                        <div className='relative space-y-2'>
                            <label className="label ">Password</label>
                            <input type={isPassword ? "text" : "password"} className="input w-full rounded-2xl p-4" {...register("password", { required: "Password field is required" })} placeholder="Type Your Password Here" />
                            <span className='absolute right-4 top-9 text-lg' onClick={() => setIsPassword(!isPassword)}>{isPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        </div>

                        {
                            errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>
                        }

                        <button className="btn bg-[#F5A623] text-black mt-4 rounded-2xl hover:bg-yellow-600 p-5">Register</button>
                        <div className="divider">or continue with</div>
                        <button className="btn btn-outline mt-4 rounded-2xl hover:bg-[#F5A623] p-5"> <FcGoogle />Login With Google </button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;