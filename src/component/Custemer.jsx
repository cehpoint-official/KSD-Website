import React, { useEffect } from 'react'
import Img1 from '../asset/customer-img.png'
import "aos/dist/aos.css";
import Aos from 'aos';

const Custemer = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className='mt-10 bg-white py-10'>
        <div className='text-center flex-col flex items-center'>
            <p className='text-gray-600 text-2xl font-semibold my-6'><i>Testimonials  ---</i></p>
            <div className='text-4xl md:text-6xl font-bold    pb-6'>
                What Our Customer Says
            </div>
            <div className='border-b-8 border-purple-600 w-64'>

            </div>
        </div>
        <div class='grid grid-cols-12 gap-8 m-10 '>

            <div class='col-span-12 md:col-span-5 lg:col-span-5'>
                <img src={Img1} alt="" className="w-full " />

            </div>
            <div class='col-span-12 md:col-span-7 lg:col-span-7'>

                <div class='text-start'>
                    <div className='border-slate-500  p-5 relative '>

                        {/* <p className='text-gray-500 font-bold'>
                            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
                        </p> */}
                        <p className='text-gray-500 font-bold'>
                            "KSD Project exceeded our expectations! Their attention to detail and commitment to quality are truly commendable. The team's professionalism and expertise ensured a smooth and successful project delivery. We highly recommend KSD Project for anyone seeking top-notch 3D modeling and printing services."
                            {/* <i>Corporis obcaecati facereLorem ipsum dolor sit amet</i> */}
                        </p>
                        {/* <p className='text-gray-500 font-bold'>
                            <i>consectetur adipisicing elit. Corporis obcaecati facere</i>

                        </p> */}
                        <div className='flex gap-2 my-4'>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                        </div>
                        <div className='lg:mt-40 md:mt-24 mt-10'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-bold text-xl'>Anya Mondal</p>
                                    <p className='text-sm text-gray-700'>Chief Accountant</p>
                                </div>
                                <div className='space-x-3'>
                                    <button className='bg-slate-100 border shadow-lg h-12 w-12 rounded-full'><i className='bi text-3xl bi-arrow-left'></i></button>
                                    <button className='bg-slate-900 border shadow-lg h-12 w-12 text-white rounded-full'><i className='bi text-3xl bi-arrow-right'></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
}

export default Custemer