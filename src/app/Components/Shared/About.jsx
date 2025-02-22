import Image from 'next/image';
import React from 'react';
import aboutImg from './../../../../public/Assest/Image/about-img.png'
import ceoImg from './../../../../public/Assest/Image/ceo.png'
import { CircleCheck } from 'lucide-react';

const About = () => {
    return (
        <div className='mt-[130px]'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    
                        <Image src={aboutImg} alt='aboutimg'></Image>
                        
                    
                    <div className='text-white px-10'>
                        <p className='text-[24px] font-semibold underline decoration-[#C4EF17]'>About us</p>
                        <h1 className="text-[44px] font-bold">Leading the best skilled courses.</h1>
                        <p className="py-6 text-[22px]">
                            Next Generation Coders" offers cutting-edge web courses tailored to empower aspiring developers with the skills and knowledge to thrive in the tech industry....
                        </p>
                        <ul className=''>
                            <li className='inline-flex'> <CircleCheck className='mr-2 text-[#C4EF17] font-semibold' />Gain the skills and confidence to land your dream job in tech. </li>
                            <li className='inline-flex mt-3'> <CircleCheck className='mr-2 text-[#C4EF17] font-semibold' />Gain the skills and confidence to land your dream job in tech. </li>
                        </ul>
                        <div className='flex gap-x-4 mt-5'>
                            <Image src={ceoImg} alt='ceo' className='h-[80px] w-[80px] rounded-full'></Image>
                            <div>
                                <h4 className='text-[28px] font-bold'>Jhon Dou</h4>
                                <p className='text-[22px] font-medium'>CEO</p>
                            </div>
                            
                        </div>
                        <button className="btn bg-[#C4EF17] w-[200px] h-[60px] text-lg hover:badge-outline hover:text-white mt-10 ">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;