import React, { useEffect } from 'react'
import Img from "../asset/welcome-page.jpg"
import ImgBg from "../asset/home-bg-img.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Services from './Services'
import Aos from 'aos'
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        Aos.init();
    });

    return <>
        <div className='relative '>
            <img src={ImgBg} alt="" className='object-fill opacity-50  md:h-[45rem]  h-[30rem] w-full' />
            <motion.div
                className='absolute h-80 lg:h-48  w-full top-10 md:top-32 text-white md:py-0 py-16 px-10 text-center  '>
                <motion.div
                    initial={{ x: -1400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='font-semibold lg:text-7xl md:text-6xl text-4xl mx-auto'>
                    <p className='mb-20'>LEADERS IN</p>
                    <p><span className='text-yellow-400'>URGENT</span> 3D SCALE MODELS</p>
                    <p><span className='text-yellow-400'>QUALITY</span> 3D PRINTING</p>
                    <p><span className='text-yellow-400'>PRECISION</span> PROTOTYPING</p>
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

        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" mx-auto grid grid-cols-12 ">



            <div className="col-span-12 md:col-span-6 lg:col-span-6 px-10 pt-5 bg-white">
                <div className="md:text-6xl text-4xl font-bold">WELCOME !</div>
                <div className="border-b-8 w-36 sm:w-40 mt-2 border-red-500"></div>
                <div className="text-gray-700  font-light mt-4  text-xl p-3">


                    The world is a place of beauty and imagination. KSD started with a dream of improving the scope of imaginations in professional practice. We create LIVE 3D MODELS of a vast variety of projects ranging from architectural building models to product design prototypes.
                    KSD 3D is a leading company that provides top-notch 3D modelling, printing, and prototyping services. With a team of skilled designers, we can create 3D models for a diverse range of projects, from buildings to jewellery designs. KSD is at the forefront of 3D printing technology, offering unparalleled quality and precision. Our services are available to a wide range of industries, including architecture, fashion, computer manufacturing, automobiles, highways, railways, education, and training. KSD 3D takes custom orders and inquiries from clients all over the world, ensuring that their customers receive tailored solutions to their unique needs. We are titled as Best in quality 3d printing, precision 3d prototyping and fastest urgent 3d model making company in India.
                </div>
            </div>

            <div className=" col-span-12 md:col-span-6 lg:col-span-6 ">
                <img src={Img} alt="" className=" w-full   object-cover " />
            </div>

        </div>
    </>
}

export default Home