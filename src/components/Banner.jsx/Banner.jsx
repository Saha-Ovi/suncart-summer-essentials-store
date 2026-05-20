import React from 'react';
import bannerImg from '../../../public/oofPicture.png'
import Image from 'next/image';
import 'animate.css';

const Banner = () => {
    return (
        <div className='container mx-auto my-8 bg'>

            <div className='bg-linear-to-r from-[#1A1410] to-[#1A1410] m-4 py-10 px-8 rounded-xl flex flex-col lg:flex-row items-center justify-between  gap-4 lg:gap-0'>
                {/* left */}
                <div className=''>
                    <h2 className='text-sm md:text-md text-[#F5A623]'>☀️ Summer 2026 Collection</h2>
                    <p className='text-white text-3xl md:text-5xl font-bold my-6'>Beat the Heat <br /> in <span className='text-[#F5A623]'>Style</span></p>
                    <p className='text-sm text-[#FAF6F0]'>Sunglasses, Outfits, Skincare & Beach Accessories — all in one place.</p>
                    <div className='mt-6 flex gap-6'>
                        <button className='btn bg-[#F5A623] text-black border-none shadow-none rounded-full p-2 md:p-6 text-md'>Shop Now</button>
                        <button className='btn bg-transparent text-white border-white shadow-none rounded-full p-2 md:p-6 text-md'>View Hot Deals 🔥</button>
                    </div>
                </div>
                {/* right */}
                <div className='w-full max-w-96 md:max-w-md lg:max-w-lg flex justify-center '>
                    <Image src={bannerImg} alt='30% OFF' height={"500"} width={"500"} className='object-contain w-full h-auto rounded-xl animate__animated animate__pulse animate__infinite'></Image>
                </div>
            </div>

        </div>
    );
};

export default Banner;