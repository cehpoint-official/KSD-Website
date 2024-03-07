import React from 'react'
import { useSpring, animated } from 'react-spring'
import { AnimatePresence, motion } from "framer-motion"
import Img1 from "../asset/achi-img1.png"
import Img2 from "../asset/achi-img2.png"
import Img3 from "../asset/achi-img3.png"
import Img4 from "../asset/achi-img3.png"

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: n },
        delay: 200,
        config: { mass: 10, tension: 10, friction: 10, duration: 5000 }, // Adjusted duration to 5000 milliseconds and added easing function
    })
    return <animated.div>{number.to((n) => (n).toFixed(0))}</animated.div> // Increment by 5
}

const Text = () => {
    return <>

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
                            src={Img3}
                            alt=""
                        />
                    </div>

                </div>
            </div >
        </div >

    </>
}

export default Text
