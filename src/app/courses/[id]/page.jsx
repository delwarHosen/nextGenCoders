import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const p = await params;
    const coursesCollection = dbConnect(collectionNameObj.coursesCollection);
    const data = await coursesCollection.findOne({ _id: new ObjectId(p) });

    return (
        <div className='p-5'>
            <div>
                <p className='text-[36px] text-white font-semibold text-center underline uppercase'>see details page</p>
            </div>
            <div className='md:flex space-x-5 text-white m-6 bg-[#121212] p-3 border-2 border-[#C4EF17]'>
                <div>
                    <Image src={data.image} width={400} height={400} className='rounded-lg'></Image>
                </div>
                <div className=''>
                    <h2 className='text-3xl font-semibold'>{data.title}</h2>
                    <p>{data.details}</p>
                    <h4 className='text-xl font-semibold'>Total: {data.price}Tk</h4>
                    <p>Total rating: {data.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default page;