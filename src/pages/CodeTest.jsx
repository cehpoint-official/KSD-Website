import React from 'react'
import ImgBg from "../asset/home-bg-img.png"
import { motion } from "framer-motion"

const CodeTest = () => {
    return <>
        <div className='relative'>
            <img src={ImgBg} alt="" className='object-fill h-80 w-full' />
            <motion.div
                className='absolute h-80 bg-yellow-900 w-full top-24 text-white md:py-0 py-16 px-10 text-center md:h-screen flex flex-col items-center justify-center'>
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='font-semibold text-4xl mx-auto'>A new approach to work</motion.div>
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='text-gray-400 text-base font-light mt-6 mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Temporibus amet nulla quia illum animi molestias est quos quod architecto debitis?
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                    className='mt-14 flex flex-col items-center md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-3'>
                    {/* <Link to="/contactUs"> */}
                    <button
                        className='border-pink-500 border px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Contact us
                    </button>
                    {/* </Link> */}
                    <button

                        className='bg-pink-600 text-white px-10 py-2 rounded-lg'>Get a Quote</button>
                </motion.div>
            </motion.div>
        </div>
        <div className='bg-red-500'>
            asfkl
        </div>
    </>
}

export default CodeTest