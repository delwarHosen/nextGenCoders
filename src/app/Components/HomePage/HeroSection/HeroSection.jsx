import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import bgImg from '../../../../../public/Assest/Image/bg.png'

const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className="hero min-h-screen" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <Image
                    src={bgImg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="hero-content">
                    <div className='md:py-20 text-center'>
                        <p className='text-white text-[44px] font-semibold text-center mt-10'>Hello Learner</p>
                        <h1 className="text-[100px] -mt-8 text-white font-bold">Develop your Skills with online Courses</h1>
                        <p className="py-6 text-white lg:px-56 -mt-4">
                            Unlock your potential with our comprehensive online course, designed to equip you with practical knowledge and skills. Whether you're a beginner or looking to enhance your expertise, this course offer
                        </p>
                        <div className='mt-10'>
                            <button className="btn bg-[#C4EF17] w-[220px] h-[65px] text-lg hover:badge-outline hover:text-white">Contact us </button>
                            <button className="btn bg-white  w-[220px] h-[65px] text-lg hover:badge-outline ml-10 hover:text-white">Contact us </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;