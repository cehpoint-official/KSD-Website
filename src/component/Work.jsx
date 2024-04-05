import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { AnimatePresence, motion } from "framer-motion"

import Work1 from "../asset/work-img/Rectangle-1.png"
import Work2 from "../asset/work-img/Rectangle-2.png"
import Work3 from "../asset/work-img/Rectangle-3.png"
import Work4 from "../asset/work-img/Rectangle-4.png"
import Work5 from "../asset/work-img/Rectangle-5.png"
import Work6 from "../asset/work-img/Rectangle-6.png"
import Work7 from "../asset/work-img/Rectangle-7.png"



const Work = () => {

    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [countFour, setCountFour] = useState(0);
    const [like, setLike] = useState(false)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => (prevCount >= 100 ? 5 : prevCount + 5));
            setCountTwo(prevCount => (prevCount >= 80 ? 5 : prevCount + 5));
            setCountThree(prevCount => (prevCount >= 90 ? 5 : prevCount + 5));
            setCountFour(prevCount => (prevCount >= 40 ? 5 : prevCount + 5));
        }, 500);

        return () => clearInterval(intervalId);
    }, [])




    return <>

        <div className='text-center  items-center mt-10 bg-white py-10'>
            <div className='text-center flex-col flex items-center'>
                <div className='text-4xl md:text-6xl font-bold    pb-6'>
                    SEE OUR LATEST WORK
                </div>
                <div className='border-b-8 border-purple-600 w-60'></div>
                <div className='md:pb-10 lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique, obcaecati nobis cupiditate quia atque distinctio vero! Quos, non voluptas.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 lg:mx-36 mx-10 gap-10">
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-8 overflow-hidden  group relative">
                    <img className="w-full z-1  object-cover  " src={Work1} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "20" : "21"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>Prototype Design service</p>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-4 group relative">
                    <img className="w-full  object-cover " src={Work2} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "8" : "9"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>3D Printing Robots</p>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-8 relative group">
                    <img className="w-full  object-cover " src={Work3} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "12" : "13"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>Expert Precision Engineering Cad Cam</p>

                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-4 group relative">
                    <img className="w-full h-full object-cover " src={Work4} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "2" : "3"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>Computer Aided Design (CAD) Services</p>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-4 group  relative">
                    <img className="w-full h-full  object-cover " src={Work5} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "3" : "4"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>CAD CAM Software</p>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-4 relative group">
                    <img className="w-full  object-cover h-full " src={Work6} alt="" />
                    <motion.div
                        className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "10" : "11"}</strong>
                        </button>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>Solid Works</p>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 80, damping: 50 }}
                    className="col-span-12 md:col-span-4 relative group">
                    <img className="w-full  object-cover " src={Work7} alt="" />
                    <motion.div className='absolute top-0 h-full w-full transition duration-700 ease-in-out group-hover:bg-opacity-65 group-hover:bg-slate-300'>

                        <button
                            onClick={e => setLike(!like)}
                            className='absolute hidden group-hover:block left-3 top-3'>
                            <i className={`bi ${!like ? "bi-heart" : "bi-heart-fill"}  text-red-700 me-1`}></i> <strong>{!like ? "5" : "6"}</strong>
                        </button>


                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 80, damping: 50 }}
                            className='absolute hidden group-hover:block  top-[40%] h-full  w-full  '>
                            <p className='font-bold text-xl text-slate-800'>3D Modeling</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>


        </div>


        <div className='text-center achiBackImg  bg-white py-24 my-32'>


            <div className="grid grid-cols-12 gap-8 lg:mx-16 mg:mx-16 mx-8">
                <div className='col-span-12 lg:col-span-3   text-white md:col-span-4 sm:col-span-6 flex justify-center items-center'>
                    <div className=''>
                        <p className="text-5xl flex font-bold  ms-6 my-4">
                            {count}+
                        </p>
                        <p className="text-2xl  font-semibold ">Total Projects</p>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3  text-white md:col-span-4 sm:col-span-6 flex justify-center items-center'>
                    <div>
                        <p className="text-5xl flex font-bold  ms-6 my-4">
                            {countTwo}+
                        </p>
                        <p className="text-2xl  font-semibold ">Total Products</p>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3  text-white md:col-span-4 sm:col-span-6 flex justify-center items-center'>
                    <div>
                        <p className="text-5xl flex font-bold  ms-9 my-4">
                            {countThree}+
                        </p>
                        <p className="text-2xl  font-semibold ">Satisfied Clients</p>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3  text-white md:col-start-3 md:col-span-8 sm:col-span-6 flex justify-center items-center'>
                    <div>
                        <p className="text-5xl flex font-bold ms-6 my-4">
                            {countFour}+
                        </p>
                        <p className="text-2xl  font-semibold ">Team Support</p>
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-12 gap-8 lg:mx-16 mg:mx-16 mx-8">
                <div
                    className=" lg:col-span-3 h-56 w-56 group md:col-span-4 sm:col-span-6 col-span-6  rounded-2xl shadow-lg "
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
                                <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{count}+</p>
                            </motion.div>
                        </motion.div>
                        <div
                            className='p-3 '>
                            <p
                                className="text-2xl  font-semibold text-black">Total Projects</p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{count}+</p>
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
                                <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countTwo}+</p>
                            </motion.div>
                        </motion.div>
                        <div
                            className='p-3 '>
                            <p
                                className="text-2xl  font-semibold text-black">Total Projects</p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countTwo}+</p>
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
                                <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countThree}+</p>
                            </motion.div>
                        </motion.div>
                        <div
                            className='p-3 '>
                            <p
                                className="text-2xl  font-semibold text-black">Satisfied Clients
                            </p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countThree} +</p>
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
                                <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countFour}+</p>
                            </motion.div>
                        </motion.div>
                        <div
                            className='p-3 '>
                            <p
                                className="text-2xl  font-semibold text-black">
                                Team Support
                            </p>
                            <p className="text-5xl flex   font-bold text-black group-hover:text-white mt-2">{countFour}+</p>
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
            </div > */}
        </div>


    </>
}

export default Work