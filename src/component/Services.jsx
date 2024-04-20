import React, { useEffect } from 'react'
// import Img1 from "../asset/server-img-1.png"
import Img2 from "../asset/server-img-2.png"
// import Img3 from "../asset/server-img-3.png"
import Img1 from "../asset/Website-Picture-gallery/3.jpeg"
import Img3 from "../asset/Website-Picture-gallery/2.jpg"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css";

const Services = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return <>
        <div className=' text-center flex-col  flex items-center bg-white mb-5'>

            <div className='text-center flex-col flex items-center lg:pb-5 pt-12 '>
                <div className='text-2xl lg:text-6xl md:text-4xl font-bold text-slate-800 pb-3'>
                    Our Services
                </div>
                <div className='border-b-[0.4rem] w-48 border-yellow-400'>

                </div>
                {/* <div className='md:pb-10 lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move
                    </p>
                </div> */}
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className='grid grid-cols-12 gap-8 m-10'>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 50 }}
                    class='col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 group bg-white'>
                    <img src={Img1} alt="" className="w-full lg:h-[389px] md:h-[250px]" />
                    <div class=''>
                        <div className='border-slate-500 bg-white p-5'>
                            <Link to="/cadServise">
                                <p className='font-semibold text-slate-700 hover:text-red-500 lg:text-3xl text-2xl'>3D model to 3D CAD Designing</p>
                            </Link>
                            <p className='my-5 text-slate-800 text-xl'>
                                we design precise 2D/3D models and seamlessly translate them into manufacturing instructions.
                            </p>
                            <Link to="/cadServise" className='flex justify-center items-center gap-2 hover:text-red-500'>
                                <p className='font-serif  text-lg'>
                                    Read More
                                </p>
                                <i className='bi bi-arrow-right text-2xl'></i>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 50 }}
                    class='col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 group '>
                    <img src={Img2} alt="" className="w-full lg:h-[389px] md:h-[250px]" />
                    <div class=''>
                        <div className='border-slate-500 bg-white p-5'>
                            <Link to="/prototype">
                                <p className='font-semibold text-slate-700 hover:text-red-500 lg:text-3xl text-2xl'>
                                    3D Printing & prototyping</p>
                            </Link>
                            <p className='my-5 text-slate-800 text-xl'>
                                3D printing is an additive manufacturing method that creates a physical object from a digital model file.
                            </p>

                            <Link to="/prototype" className='flex justify-center items-center gap-2 hover:text-red-500'>
                                <p className='font-serif  text-lg'>
                                    Read More
                                </p>
                                <i className='bi bi-arrow-right text-2xl'></i>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 50 }}
                    class='col-span-12 sm:col-span-6  md:col-span-4 sm:col-start-4 lg:col-span-4 group'>
                    <img src={Img3} alt="" className="w-full lg:h-[389px] md:h-[250px]" />
                    <div class=''>
                        <div className='border-slate-500 bg-white p-5'>
                            <Link to="/manufacturing" >

                                <p className='font-semibold text-slate-700 hover:text-red-500 lg:text-3xl text-2xl'>Manufacturing</p>
                            </Link>
                            <p className='my-5 text-slate-800 text-xl'>
                                Deifine
                                The process of turning raw materials or parts into finished goods through the use of tools, human labor, machinery, and chemical processing
                            </p>

                            <Link to="/manufacturing" className='flex justify-center items-center gap-2 hover:text-red-500'>
                                <p className='font-serif text-lg'>
                                    Read More
                                </p>
                                <i className='bi bi-arrow-right text-2xl'></i>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>


            {/* <div class='grid grid-cols-12 gap-8 m-10'>
                <div class='col-span-12 md:col-span-4 lg:col-span-4  mt-24'>
                    <div className='bg-gray-900 hover:bg-pink-500 text-white group border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-camera text-pink-500  me-1 group-hover:text-white'></i> Trusted By Clients</p>
                    </div>
                    <div className='bg-gray-900 hover:bg-pink-500 text-white group border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-threads text-pink-500 me-1 group-hover:text-white'></i> Expertise In Domain</p>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-4 lg:col-span-4'>
                    <div className='bg-gray-900 hover:bg-pink-500 group text-white border-gray-400 p-6 '>
                        <p> <i className='bi bi-recycle text-pink-500 me-1 group-hover:text-white'></i> Quick De livery</p>
                    </div>
                    <div className='flex justify-center my-16'>
                        <div className='h-40 w-40 rounded-full border-spacing-2 flex justify-center items-center border-gray-900 border-[10px]'>
                            <div className='h-36 w-36 rounded-full border-[6px] border-pink-800  bg-pink-600 justify-center flex items-center'>
                                <p className='font-bold text-lg text-white'>Why Us?</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 hover:bg-pink-500 group text-white border-gray-400 p-6 '>
                        <p> <i className='bi bi-share text-pink-500 me-1 group-hover:text-white'></i> Client Satisfaction</p>
                    </div>
                </div>
                <div class='col-span-12 md:col-span-4 lg:col-span-4 lg:mt-24 md:mt-24'>
                    <div className='bg-gray-900 hover:bg-pink-500 group text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-rocket-takeoff text-pink-500 me-1 group-hover:text-white'></i> Affordable Price</p>
                    </div>
                    <div className='bg-gray-900 hover:bg-pink-500 group text-white border-gray-400 p-6 my-8'>
                        <p> <i className='bi bi-router text-pink-500 me-1 group-hover:text-white'></i> Assured Quality</p>
                    </div>
                </div>


            </div> */}

        </div>


    </>
}

export default Services