import React, { useEffect } from 'react'
import Img from "../asset/Website-Picture-gallery/Picture1.png"
import ImgBg from "../asset/home-bg-img.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Services from './Services'
import Aos from 'aos'
import "aos/dist/aos.css";
import BgVdo from "../asset/videoplayback.mp4"


const Home = () => {

    useEffect(() => {
        Aos.init();
    });
    return <div >
        <div className='relative '>
            <div className=' h-[100vh] -z-30 top-0 fixed w-full'>
                <video autoPlay loop muted className=' w-full z-[-10] h-full object-cover '>
                    <source src={BgVdo} type='video/mp4' />
                </video>

            </div>
            <img src={ImgBg} alt="" className='object-fill opacity-50  lg:h-[33rem]  md:h-[22rem] h-[13rem] w-full' />
            <motion.div
                className='absolute h-80 lg:h-48  w-full top-0  text-white   text-center  '>
                <motion.div
                    initial={{ x: -1400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='font-semibold lg:text-6xl md:text-4xl mt-12 lg:mt-28 text-2xl mx-auto'>
                    {/* <p className='mt-12 lg:mt-20 mb-4 md:mb-10'>LEADERS IN</p> */}
                    <p><span className='text-yellow-400'>URGENT</span> 3D CAD DESIGNING</p>
                    <p><span className='text-yellow-400'>QUALITY</span> 3D PRINTING</p>
                    <p><span className='text-yellow-400'>PRECISION</span> PROTOTYPING</p>
                    <p><span className='text-yellow-400'>PRECISION</span> MANUFACTURING</p>

                </motion.div>
                {/* <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='text-gray-200 text-lg font-light mt-6 mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Temporibus amet nulla quia illum animi molestias est quos quod architecto debitis?
                </motion.div> */}
                {/* <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                    className='mt-14 flex flex-col items-center md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-3'>
                    <Link to="/contactUs">
                        <button
                            className='border-[#ff0000] text-[#ff0000] hover:text-white border text-2xl hover:bg-[#ff0000] px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                            Contact us
                        </button>
                    </Link>
                    <Link to="/company/quote">
                        <button className='bg-[#ff0000] hover:bg-[#ff0000] text-white px-10 py-2 text-2xl rounded-lg'>Get a Quote</button>
                    </Link>
                </motion.div> */}
            </motion.div>
        </div>


        <Services />

        {/* welcome page start */}
        <div className=' bg-cover mb-6 md:mb-8 lg:mb-10'>
            <div className=''>
                <div className="grid grid-cols-12 ">

                    <div className="lg:col-span-6 col-span-12 px-10 pt-5  h-full  bg-white">
                        <div className="lg:text-5xl md:text-4xl text-2xl font-bold">WELCOME TO THE LEALM OF UNLIMITED POSSIBILITIES</div>
                        <div className="border-b-[0.4rem] w-36 sm:w-40 mt-2 border-red-500"></div>
                        <div className="text-gray-700 font-light mt-4  text-xl p-3">
                            <p>
                                KSD Technologies is a leading top-notch 3D modelling, prototyping & manufacturing services with a team of skilled designers & operators, We can create 3D models and manufacturing of parts for a diverse range of projects, from diff industries like Automobile, Defense, household, Buildings.
                            </p>

                            <p className='mt-2'>
                                Our Services are available to a wide range of industries, Including architecture, fashion, Computer manufacturing, Automobile, Highways, railways, Education & Training
                            </p>

                        </div>
                    </div>
                    <div class="lg:col-span-6 col-span-12">
                        <img src={Img} alt="" class="h-full  w-full" />
                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default Home