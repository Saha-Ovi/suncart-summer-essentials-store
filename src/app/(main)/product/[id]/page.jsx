import React from 'react';
import productData from '@/data/product.json'
import Image from 'next/image';
import { IoCartSharp } from 'react-icons/io5';
import { GiRoyalLove } from 'react-icons/gi';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(Number(id));
    const product = productData.find(product => product.id === Number(id));
    console.log(product);
    return (
        <div className='container mx-auto my-8 px-4'>
            <div className="card bg-base-100 w-full shadow-md ">
                <figure className='w-full  overflow-hidden bg-base-200 px-6 py-8'>
                    <Image src={product.image} alt={product.name} height={500} width={500} className='object-cover rounded-2xl'></Image>
                </figure>
                <div className="card-body my-8">
                    <div className='flex gap-4'>
                        <span className=" badge badge-soft badge-warning" >{product.category}</span>
                        {
                            product.stock ? <span className="badge badge-soft badge-info">In Stock</span > : <span className="badge badge-soft badge-error">Out Of Stock</span>
                        }
                    </div>
                    <div>
                        <h2 className="card-title text-2xl md:text-4xl font-bold">{product.name}</h2>
                        <p className='text-md md:text-xl'>By {product.brand} </p>
                    </div>
                    <div>
                        <span className='text-yellow-400'>{product.ratingStars}</span> <span className='font-semibold'>({product.rating})</span>
                    </div>
                    <div className='text-yellow-400 font-medium text-xl md:text-3xl'>
                        $ {product.price}
                    </div>
                    <div className='text-md md:text-xl'>
                        <p>{product.description}</p>
                    </div>
                    {/* details */}
                    <div className='grid grid-cols-2 gap-2 my-8'>
                        <div className='bg-[#FAF6F0] p-2 text-center rounded-2xl'>
                            <h4 className='font-bold text-xl'>Brand</h4>
                            <p className='font-medium'>{product.brand}</p>
                        </div>
                        <div className='bg-[#FAF6F0] p-2 text-center rounded-2xl'>
                            <h4 className='font-bold text-xl'>Stock</h4>
                            <p className='font-medium'>{product.stock} Units</p>
                        </div>
                        <div className='bg-[#FAF6F0] p-2 text-center rounded-2xl'>
                            <h4 className='font-bold text-xl'>Category</h4>
                            <p className='font-medium'>{product.category}</p>
                        </div>
                        <div className='bg-[#FAF6F0] p-2 text-center rounded-2xl'>
                            <h4 className='font-bold text-xl'>Rating</h4>
                            <p className='font-medium'>{product.rating} / 5</p>
                        </div>
                    </div>
                    {/* quantity */}
                    <div className='w-fit select-none my-4'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm md:text-xl font-medium shrink-0'>Qty:</p>
                            <div className='flex items-center gap-2 bg-base-100 border border-[#1A1410]/10 p-1 md:p-2 rounded-full'>
                                <button className='btn btn-ghost btn-circle btn-xs hover:bg-[#1A1410]/10 font-bold text-xs'>
                                    -
                                </button>
                                <span className='w-10 text-center font-semibold text-black text-sm'> 1 </span>
                                <button className='btn btn-ghost btn-circle btn-xs text-xs hover:bg-[#1A1410]/10 font-bold'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-actions justify-center ">
                        <button className="btn bg-[#F5A623] text-[#1A1410] w-full rounded-full text-lg  mb-4"><IoCartSharp />Add to Cart</button>
                        <button className="btn btn-outline text-[#1A1410] w-full rounded-full text-lg"><GiRoyalLove /> Save to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;