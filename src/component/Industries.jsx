import React from 'react'
import { motion } from 'framer-motion';
import Img1 from "../asset/industries-img/Rectangle-1.png"
import Img2 from "../asset/industries-img/Rectangle-2.png"
import Img3 from "../asset/industries-img/Rectangle-3.png"
import Img4 from "../asset/industries-img/Rectangle-4.png"
import Img5 from "../asset/industries-img/Rectangle-5.png"
import Img6 from "../asset/industries-img/Rectangle-6.png"

const Industries = () => {
    return <>
        <div className='text-center items-center  mt-10'>
            <div className='text-center flex-col flex items-center'>
                <div className='text-5xl font-bold  border-b-4  pb-4 '>
                    Industries</div>
            </div>

            <div className=' flex justify-center'>

                <div className='md:pb-10  lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique, obcaecati nobis cupiditate quia atque distinctio vero! Quos, non voluptas.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1st row */}
                <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full z-1 h-52 object-cover group-hover:blur-[2px] " src={Img1} alt="" />
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Img2} alt="" />
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 relative group">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Img3} alt="" />
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 group relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Img4} alt="" />
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 group lg:col-span-1 relative">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Img5} alt="" />
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="col-span-1 md:col-span-1 lg:col-span-1 relative group">
                    <img className="w-full h-52 object-cover group-hover:blur-[2px]" src={Img6} alt="" />
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
        </div>
    </>
}

export default Industries