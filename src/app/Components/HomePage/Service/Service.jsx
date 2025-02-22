
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import './Services.css'
import Image from 'next/image';
import Link from 'next/link';

const Service = async () => {

    const coursesCollection = dbConnect(collectionNameObj.coursesCollection);
    const data = await coursesCollection.find({}).toArray();

    return (
        <div className='mt-[130px]'>
            <div className='mx-auto md:w-2/3'>
                <h1 className='text-[48px] text-white font-semibold underline text-center uppercase'>Our Courses</h1>
                <p className='text-center text-white'>Unlock your potential with our expertly designed courses. Whether you're a beginner or an advanced learner, our interactive lessons and hands-on projects will help you master new skills.</p>
            </div>
            <div>
                <div className="">
                    {
                        data.map(element => {

                            return (
                                <div key={element._id} className="card card-side shadow-xl text-white m-6 bg-[#121212] border-2 border-[#C4EF17]">
                                    <figure className=''>
                                        <Image src={element.image} className='p-2 bannerImg' height={400} width={400} alt='img'></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-[44px]">{element.title}!</h2>
                                        <p className='text-[22px] mt-4'>{element.details}</p>
                                        <div className="card-actions mt-4">
                                            <Link href={`/courses/${element._id}`} className="btn bg-[#C4EF17] h-[65px] w-[200px] text-[18px]">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};




export default Service;


