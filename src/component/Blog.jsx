import React from 'react'
import Img1 from "../asset/blog-1.png"
import Img2 from "../asset/blog-2.png"
import Img3 from "../asset/blog-3.png"
import Img4 from "../asset/blog-4.png"


const Blog = () => {
    return <>
        <div className='text-center flex-col flex items-center mt-10 bg-black py-10'>
            <div className='text-5xl font-bold border-white text-white border-b-2 pb-2'>OUR BLOG</div>

            <div class='grid grid-cols-12 gap-8 m-10 '>
                <div class='col-span-12 md:col-span-5 lg:col-span-5'>
                    <img src={Img1} alt="" className="w-full lg:h-80 md:h-80" />

                </div>
                <div class='col-span-12 md:col-span-7 lg:col-span-7'>

                    <div class='text-start text-white'>
                        <div className='border-slate-500  p-5 h-full'>
                            <p className='font-bold text-xl'>
                                Mastering the Art of CAD: Unveiling Advanced Techniques for 3D Design
                            </p>
                            <p className='mt-3 text-sm'>
                                By Tithi Mondal, 21 Jan 2024
                            </p>
                            <p className=' my-6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati facere dignissimos libero, officiis, id, autem hic accusantium voluptatibus provident at ullam eius porro quo! Lorem ipsum dolor sit.
                            </p>
                            <button className='text-sm border-2  text-white px-4 py-1 rounded-lg font-bold'>Read  More</button>

                        </div>
                    </div>
                </div>


            </div>

            <div class='grid grid-cols-12 gap-8 m-10'>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img2} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 text-white'>
                            <p className='font-bold text-xl mt-4'>
                                Exploring the Latest Trends in CAD Technology
                            </p>
                            <p className='my-3 text-sm'>
                                By Tithi Mondal, 21 Jan 2024
                            </p>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati facere
                            </p>
                            <button className='text-sm border-2  text-white px-4 mt-8 py-1 rounded-lg font-bold'>Read More...</button>
                        </div>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 text-white'>
                            <p className='font-bold text-xl mt-4'>
                                Exploring the Latest Trends in CAD Technology
                            </p>
                            <p className='my-3 text-sm'>
                                By Tithi Mondal, 21 Jan 2024
                            </p>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati facere
                            </p>
                            <button className='text-sm border-2  text-white px-4 mt-8 py-1 rounded-lg font-bold'>Read More...</button>
                        </div>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 text-white'>
                            <p className='font-bold text-xl mt-4'>
                                Exploring the Latest Trends in CAD Technology
                            </p>
                            <p className='my-3 text-sm'>
                                By Tithi Mondal, 21 Jan 2024
                            </p>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati facere
                            </p>
                            <button className='text-sm border-2 font-bold text-white px-4 mt-8 py-1 rounded-lg'>Read More...</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    </>
}

export default Blog