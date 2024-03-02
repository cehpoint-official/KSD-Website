import React from 'react'
import Img1 from "../asset/server-img-1.png"
import Img2 from "../asset/server-img-2.png"
import Img3 from "../asset/server-img-3.png"

const Services = () => {
    return <>
        <div className=' text-center flex-col flex items-center bg-black '>
            <div className='pt-28 lg:pb-5 text-5xl text-white font-bold'>Our Services</div>
            <div className=' md:mx-0 mx-10  pb-10 md:pb-10 lg:pb-12 text-xl md:w-[60%] lg:w-[50%] text-gray-300 pt-2'>
                <p>
                    KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move
                </p>
            </div>
            <div class='grid grid-cols-12 gap-8 m-10'>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img1} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 bg-white p-5'>
                            <p className='font-bold'>3D CAD/CAM</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <p className='text-gray-500'>
                                3D CAD/CAM
                            </p>
                        </div>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img2} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 bg-white p-5'>
                            <p className='font-bold'>Prototype</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <p className='text-gray-500'>
                                Prototype
                            </p>
                        </div>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-6 lg:col-span-4'>
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start'>
                        <div className='border-slate-500 bg-white p-5'>
                            <p className='font-bold'>Manufacturing</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <p className='text-gray-500'>
                                Manufacturing
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div class='grid grid-cols-12 gap-8 m-10'>
                <div class='col-span-12 md:col-span-4 lg:col-span-4 mt-24'>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-camera text-pink-500 me-1'></i> Trusted By Clients</p>
                    </div>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-threads text-pink-500 me-1'></i> Expertise In Domain</p>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-4 lg:col-span-4'>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 '>
                        <p> <i className='bi bi-recycle text-pink-500 me-1'></i> Quick De livery</p>
                    </div>
                    <div className='flex justify-center my-16'>
                        <div className='h-40 w-40 rounded-full border-spacing-2 flex justify-center items-center border-gray-900 border-[10px]'>
                            <div className='h-36 w-36 rounded-full border-[6px] border-pink-800  bg-pink-600 justify-center flex items-center'>
                                <p className='font-bold text-lg text-white'>Why Us?</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 '>
                        <p> <i className='bi bi-share text-pink-500 me-1'></i> Client Satisfaction</p>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-4 lg:col-span-4 lg:mt-24 md:mt-24'>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-rocket-takeoff text-pink-500 me-1'></i> Affordable Price</p>
                    </div>
                    <div className='bg-gray-900 text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-router text-pink-500 me-1'></i> Assured Quality</p>
                    </div>
                </div>


            </div>

        </div>


    </>
}

export default Services