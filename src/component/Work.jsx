import React from 'react'
import { useSpring, animated } from 'react-spring'
import { AnimatePresence, motion } from "framer-motion"
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


function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: n },
        delay: 200,
        config: { mass: 10, tension: 10, friction: 10, duration: 5000 }, // Adjusted duration to 5000 milliseconds and added easing function
    })
    return <animated.div>{number.to((n) => (n).toFixed(0))}</animated.div> // Increment by 5
}


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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
        <div className="grid grid-cols-12 gap-8 lg:mx-16 mg:mx-16 mx-8">
            <div
                className=" lg:col-span-3 h-56 w-56 group md:col-span-4 sm:col-span-6 col-span-6 bg-gray-50 rounded-2xl shadow-lg "
            >
                <div className='relative '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ delay: 0, duration: 1.5 }}
                        className='group-hover:block hidden absolute'>
                        <AnimatePresence>
                            <motion.img
                                className=' rounded-2xl h-56 w-56 top-0 '
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />
                        </AnimatePresence>
                        <motion.div
                            initial={{ y: -60 }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, delay: 2 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='absolute top-0 p-3 mt-10'>
                            <p
                                className="text-2xl  font-semibold text-white">Total Projects</p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={20} />+</p>
                        </motion.div>
                    </motion.div>
                    <div
                        className='p-3 '>
                        <p
                            className="text-2xl  font-semibold text-black">Total Projects</p>
                        <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={20} />+</p>
                    </div>

                    <div className='flex justify-end p-3'>
                        <img
                            className="w-24 h-20"
                            src={Img1}
                            alt=""
                        />
                    </div>

                </div>
            </div >
            <div
                className=" lg:col-span-3 h-56 w-56 group md:col-span-4 sm:col-span-6 col-span-6  bg-gray-50 rounded-2xl shadow-lg "
            >
                <div className='relative '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0, duration: 1.5 }}
                        className='group-hover:block hidden absolute'>
                        <AnimatePresence>
                            <motion.img
                                className=' rounded-2xl h-56 w-56 top-0 '
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3QlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </AnimatePresence>
                        <motion.div
                            initial={{ y: -60 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='absolute top-0 p-3 mt-10'>
                            <p
                                className="text-2xl  font-semibold text-white">Total Projects</p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={30} />+</p>
                        </motion.div>
                    </motion.div>
                    <div
                        className='p-3 '>
                        <p
                            className="text-2xl  font-semibold text-black">Total Projects</p>
                        <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={30} />+</p>
                    </div>

                    <div className='flex justify-end p-3'>
                        <img
                            className="w-24 h-20"
                            src={Img2}
                            alt=""
                        />
                    </div>

                </div>
            </div >
            <div
                className=" lg:col-span-3 h-56 w-56 group md:col-span-4 sm:col-span-6 col-span-6  bg-gray-50 rounded-2xl shadow-lg "
            >
                <div className='relative '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0, duration: 1.5 }}
                        className='group-hover:block hidden absolute'>
                        <AnimatePresence>
                            <motion.img
                                className=' rounded-2xl h-56 w-56 top-0 '
                                src="https://plus.unsplash.com/premium_photo-1661768507909-f961fcff0d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpZW50fGVufDB8fDB8fHww"
                                alt=""
                            />
                        </AnimatePresence>
                        <motion.div
                            initial={{ y: -60 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='absolute top-0 p-3 mt-10'>
                            <p
                                className="text-2xl  font-semibold text-white">Satisfied Clients</p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={50} />+</p>
                        </motion.div>
                    </motion.div>
                    <div
                        className='p-3 '>
                        <p
                            className="text-2xl  font-semibold text-black">Satisfied Clients
                        </p>
                        <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={50} />+</p>
                    </div>

                    <div className='flex justify-end p-3'>
                        <img
                            className="w-24 h-20"
                            src={Img3}
                            alt=""
                        />
                    </div>

                </div>
            </div >
            <div
                className=" lg:col-span-3 h-56 w-56 group md:col-span-4 sm:col-span-6 col-span-6  bg-gray-50 rounded-2xl shadow-lg "
            >
                <div className='relative '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0, duration: 1.5 }}
                        className='group-hover:block hidden absolute'>
                        <AnimatePresence>
                            <motion.img
                                className=' rounded-2xl h-56 w-56 top-0 '
                                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </AnimatePresence>
                        <motion.div
                            initial={{ y: -60 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='absolute top-0 p-3 mt-10'>
                            <p
                                className="text-2xl  font-semibold text-white">
                                Team Support
                            </p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={70} />+</p>
                        </motion.div>
                    </motion.div>
                    <div
                        className='p-3 '>
                        <p
                            className="text-2xl  font-semibold text-black">
                            Team Support
                        </p>
                        <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2"><Number n={70} />+</p>
                    </div>

                    <div className='flex justify-end p-3'>
                        <img
                            className="w-24 h-20"
                            src={Img4}
                            alt=""
                        />
                    </div>

                </div>
            </div >
        </div >


    </>
}

export default Work