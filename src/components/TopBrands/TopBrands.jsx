import React from 'react';

const TopBrands = () => {
        const brands = [
        { id: "1", name: "SunShade", logo: "🕶️", tagline: "Eye Care" },
        { id: "2", name: "SolGuard", logo: "🧴", tagline: "Unseen Sunscreen" },
        { id: "3", name: "AquaWeave", logo: "⚡", tagline: " Microfiber Towel" },
        { id: "4", name: "HydroChill", logo: "💧", tagline: "Vacuum Insulated Water" }
    ];

    return (
        <div className='container mx-auto px-4'>
            <div className='text-center my-8'>
                <h2 className='text-2xl md:text-4xl font-bold'> Shop Top Brands</h2>
                <div className='w-30 h-2 mx-auto bg-[#F5A623] rounded-full mt-3'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    brands.map(brand=> (
                    <div key={brand.id} className='bg-[#1A1410]/5 border border-[#1A1410]/5 text-center p-4 rounded-2xl hover:bg-[#1A1410] hover:border-transparent hover:text-white cursor-pointer flex flex-col items-center transition-all group'>
                        <div className='h-16 w-16 rounded-full bg-white flex items-center justify-center mb-2 text-[#1A1410] group-hover:bg-[#F5A623] group-hover:text-white transition-colors duration-300 '>
                            {brand.logo}
                        </div>
                        <div className='font-bold text-lg'>
                            {brand.name}
                        </div>
                        <div className='font-medium'>
                            {brand.tagline}
                        </div>
                    </div>
                    
                
                )
                    )
                }

            </div>
        </div>
    );
};

export default TopBrands;