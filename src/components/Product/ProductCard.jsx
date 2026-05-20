import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className='w-full rounded-2xl overflow-hidden relative aspect-square'>
                    <Image src={data.image} alt={data.name} height={150} width={150} className='object-cover'></Image>
                </figure>
                <div className="card-body">
                    <span className=''>{data.category}</span>
                    <h2 className="card-title">
                        {data.name}
                    </h2>
                    <div>
                        <span className='text-yellow-400'>{data.ratingStars}</span> <span>({data.rating})</span>
                    </div>
                    <p>{data.description}</p>
                    <div className="card-actions justify-between items-center">
                        <div className="text-sm md:text-lg lg:text-xl font-medium">$ {data.price}</div>
                        <Link href={`product/${data.id}`}><p className="btn btn-outline">Products Details</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;