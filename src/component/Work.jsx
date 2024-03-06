import React from 'react'
import { motion } from 'framer-motion';
import Img1 from "../asset/achi-img1.png"
import Img2 from "../asset/achi-img2.png"
import Img3 from "../asset/achi-img3.png"
import Img4 from "../asset/achi-img3.png"
import Work1 from "../asset/work-img/Rectangle-1.png"
import Work2 from "../asset/work-img/Rectangle-2.png"
import Work3 from "../asset/work-img/Rectangle-3.png"
import Work4 from "../asset/work-img/Rectangle-4.png"
import Work5 from "../asset/work-img/Rectangle-5.png"
import Work6 from "../asset/work-img/Rectangle-6.png"



const Work = () => {
    return <>

        <div className='text-center  items-center mt-10'>


            <div className='text-center flex-col flex items-center'>
                <div className='text-5xl font-bold  border-b-4  pb-6'>
                    SEE OUR LATEST WORK
                </div>
                <div className='md:pb-10 lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique, obcaecati nobis cupiditate quia atque distinctio vero! Quos, non voluptas.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1st row */}
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full z-1 h-52 object-cover group-hover:blur-[2px] " src={Work1} alt="" />
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Work2} alt="" />
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 relative group">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Work3} alt="" />
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>

                {/* 2nd row */}
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Work4} alt="" />
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 group lg:col-span-1 relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Work5} alt="" />
                    <motion.div
                        whileHover={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 relative group">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Work6} alt="" />
                    <motion.div
                        whileHover={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='absolute hidden group-hover:block top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </motion.div>
                </motion.div>
            </div>

            <p className='text-gray-600 text-xl font-semibold my-6 mt-16'><i>ACHIEVEMENTS  ---</i></p>
            <div className='text-4xl  mb-8 text-black font-bold pb-2'>Our ACHIEVEMENTS
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:mx-16 mg:mx-16 mx-8">
            <motion.div
                className="p-3 lg:col-span-3 group md:col-span-4 sm:col-span-6 col-span-12 hover:bg-gray-300 bg-gray-100 rounded-md shadow-md w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <p className="text-lg font-bold text-gray-800">Total Projects</p>
                        <p className="text-3xl font-bold text-blue-500">50+</p>
                    </div>
                    <img
                        className="w-[40%] h-20"
                        src={Img1}
                        alt=""
                    />
                </div>
            </motion.div>
            <motion.div
                className="p-3 lg:col-span-3 group md:col-span-4 sm:col-span-6 col-span-12 hover:bg-gray-300 bg-gray-100 rounded-md shadow-md w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <p className="text-lg font-bold text-gray-800">Total Products</p>
                        <p className="text-3xl font-bold text-blue-500">30+</p>
                    </div>
                    <img
                        className="w-[40%] h-20"
                        src={Img3}
                        alt=""
                    />
                </div>
            </motion.div>
            <motion.div
                className="p-3 lg:col-span-3 group md:col-span-4 sm:col-span-6 col-span-12 hover:bg-gray-300 bg-gray-100 rounded-md shadow-md w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <p className="text-lg font-bold text-gray-800">Satisfied Clients</p>
                        <p className="text-3xl font-bold text-blue-500">70+</p>
                    </div>
                    <img
                        className="w-[40%] h-20"
                        src={Img2}
                        alt=""
                    />
                </div>
            </motion.div>
            <motion.div
                className="p-3 lg:col-span-3 group md:col-span-4 sm:col-span-6 col-span-12 hover:bg-gray-300 bg-gray-100 rounded-md shadow-md w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className='flex justify-between items-center'>
                    <div>
                        <p className="text-lg font-bold text-gray-800">Team Support</p>
                        <p className="text-3xl font-bold text-blue-500">20+</p>
                    </div>
                    <img
                        className="w-[40%] h-20"
                        src={Img4}
                        alt=""
                    />
                </div>
            </motion.div>
        </div>

    </>
}

export default Work