import React from 'react';
import productData from '@/data/product.json'
import ProductCard from '@/components/Product/ProductCard';


const AllProductPage = () => {
    return (
        <div className='container mx-auto my-8 px-4'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-extrabold'>🔥Popular Products</h2>
            <p className='text-md md:text-2xl font-medium'>Hand-picked summer favourites : </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4 mt-6'>
                {
                    productData.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProductPage;