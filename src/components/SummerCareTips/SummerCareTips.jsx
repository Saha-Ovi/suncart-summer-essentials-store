import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SummerCareTips = () => {
    const tips = [
        {
            id: "1",
            title: "The Ultimate Hydration Guide",
            category: "Hydration",
            desc: "How much water do you actually need when it's over 90°F? Hint: It's not just about standard glasses.",
            image: "https://i.ibb.co.com/LXRwm1qN/hydration.jpg"
        },
        {
            id: "2",
            title: "Sunscreen 101: Mineral vs Chemical",
            category: "Skincare",
            desc: "Break down the confusion around SPF ratings, PA factors, and finding the perfect match for sensitive skin.",
            image: "https://i.ibb.co.com/bRCBNnjG/skin-Care.jpg"
        },
        {
            id: "3",
            title: "Post-Beach Hair Repair Steps",
            category: "Haircare",
            desc: "Salt water and intense UV rays can leave hair feeling brittle. Restore your natural shine with these simple steps.",
            image: "https://i.ibb.co.com/jZDS5yhL/haircare.jpg"
        }
    ];
    return (
        <div className='container mx-auto px-4 select-none'>
            <div>
                <span className='badge bg-[#F5A623] text-white font-bold text-xl'>Summer Wellness</span>
                <h2 className='my-4 clear-start text-2xl md:text-4xl font-bold'>Summer Care Tips</h2>
                <span className='text-md lg:text-xl font-medium'>Stay safe & fresh this season</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    tips.map(tip =>
                     <div key={tip.id} className="card bg-base-100 shadow-sm rounded-2xl hover:shadow-xl transition-shadow cursor-pointer border border-[#1A1410]/20">
                            <figure className="px-10 pt-10">
                                <Image className='rounded-2xl' src={tip.image} alt={tip.title} height={300} width={300}></Image>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{tip.title}</h2>
                                <p>{tip.desc}</p>
                                <div className="card-actions">
                                    <button className="btn btn-outline hover:bg-[#F5A623]">Read More <FaArrowRight/></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SummerCareTips;