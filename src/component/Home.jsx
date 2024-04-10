import React, { useEffect } from 'react'
import Img from "../asset/welcome-page.jpg"
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
                    className='font-semibold lg:text-6xl md:text-4xl mt-2 text-2xl mx-auto'>
                    <p className='mt-12 lg:mt-20 mb-4 md:mb-10'>LEADERS IN</p>
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
        <div className=' item w-full bg-red-600 bg-cover mb-40 md:mb-36 lg:mb-52'>
            <div className=''>
                <div className="">

                    <div className=" px-10 pt-5 w-[50%] h-full bg-white">
                        <div className="lg:text-6xl md:text-4xl text-2xl font-bold">WELCOME !</div>
                        <div className="border-b-[0.4rem] w-36 sm:w-40 mt-2 border-red-500"></div>
                        <div className="text-gray-700  font-light mt-4  text-xl p-3">
                            The world is a place of beauty and imagination. KSD started with a dream of improving the scope of imaginations in professional practice. We create LIVE 3D MODELS of a vast variety of projects ranging from architectural building models to product design prototypes.
                            KSD 3D is a leading company that provides top-notch 3D modelling, printing, and prototyping services. With a team of skilled designers, we can create 3D models for a diverse range of projects, from buildings to jewellery designs. KSD is at the forefront of 3D printing technology, offering unparalleled quality and precision.
                            <div className='py-4 hidden lg:block'>
                                Our services are available to a wide range of industries, including architecture, fashion, computer manufacturing, automobiles, highways, railways, education and training. Fraxus 3D takes custom orders and inquiries from clients all over the world, ensuring that their customers receive tailored solutions to their unique needs. We are titled as Best in quality 3d printing, precision 3d prototyping and fastest urgent 3d model making company in India.
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex '>
                <div className="text-gray-700 w-[60%] font-light mt-4  text-xl p-3">
                    <div className="lg:text-6xl md:text-4xl text-2xl font-bold">WELCOME !</div>
                    <div className="border-b-[0.4rem] w-36 sm:w-40 mt-2 border-red-500"></div>
                    <p>
                        The world is a place of beauty and imagination. KSD started with a dream of improving the scope of imaginations in professional practice. We create LIVE 3D MODELS of a vast variety of projects ranging from architectural building models to product design prototypes.
                        KSD 3D is a leading company that provides top-notch 3D modelling, printing, and prototyping services. With a team of skilled designers, we can create 3D models for a diverse range of projects, from buildings to jewellery designs. KSD is at the forefront of 3D printing technology, offering unparalleled quality and precision.
                    </p>
                </div>
                <div className=' -z-30'>
                    <img src="https://static.wixstatic.com/media/a9aecfcd0c474899a57da07176a929c4.jpg/v1/fill/w_640,h_1296,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/a9aecfcd0c474899a57da07176a929c4.jpg" alt="" className="  w-full right-0 -z-20  " />
                </div>

            </div> */}

                    {/* <div className=" col-span-12 md:col-span-6 lg:col-span-6">
                <img src={Img} alt="" className=" w-full md:h-[80%]  object-cover " />
            </div> */}

                </div>
            </div>

        </div>

    </div>
}

export default Home