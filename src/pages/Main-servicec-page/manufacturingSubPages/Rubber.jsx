import React from 'react'
import Img1 from "../../../asset/main-services-page/Manufacturing/rubber/img-1.png"
import Img2 from "../../../asset/main-services-page/Manufacturing/rubber/img-2.png"
import Img3 from "../../../asset/main-services-page/Manufacturing/rubber/img-3.png"
import Img4 from "../../../asset/main-services-page/Manufacturing/rubber/img-4.png"
import Img5 from "../../../asset/main-services-page/Manufacturing/rubber/img-5.png"
import Img6 from "../../../asset/main-services-page/Manufacturing/rubber/img-6.png"
import Img7 from "../../../asset/main-services-page/Manufacturing/rubber/img-7.png"
import Img8 from "../../../asset/main-services-page/Manufacturing/rubber/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'
import { motion } from "framer-motion"

const Rubber = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Rubber Mould</div>
                    <div className=" text-base font-light pt-6">
                        Rubber moulding process is used in wide industries such as pharmaceutical, automotive parts, die cut, oil & gas industry, healthcare, transportation and many other manufacturing units.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why Rubber Mould?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10 my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'> Customization</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Waterproof
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Material Cost Savings
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Protection From Cracking
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Retains Original Shape
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Supports Different Materials
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Our Rubber Mold Manufacturing</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>
                        At KSD Technologies we are committed to providing our customers with dependable, trusted rubber manufacturing solutions. Our team of engineers and technicians work to exceed our customers’ expectations by understanding every aspect of your project.
                    </p>
                    <p className='mt-3'>
                        We are committed to creating exceptional products through the application of outstanding product development and quality engineering services.
                    </p>

                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Uses for Rubber Molding
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <motion.div

                class="grid grid-cols-12 gap-6 mt-20">
                <motion.div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Rubber Bumbers</p>
                            <p className='my-3'>
                                Rubber bumpers come in a variety of shapes and sizes to be used in manufacturing specific products such as recessed, mushroom, stem, grommet, and tack bumpers. Bumpers reduce vibration and movement in equipment to protect rigid parts from damage caused by vibrations and impact. They protect furniture, work surfaces, circuit boards, displays, and packaging.
                            </p>

                        </div>
                    </div>
                </motion.div>
                <motion.div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Rubber Bushings</p>
                            <p className='my-3'>

                                Rubber bushings are somewhat like rubber bumpers since they are designed to absorb vibrations and impact on machinery. They are shaped and configured to fit specific applications, though the most common form is a cylinder. Rubber bushings can be placed on a machine to reduce vibrations or between two pieces of equipment to prevent vibration transfer.
                            </p>

                        </div>
                    </div>
                </motion.div>
                <motion.div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Rubber Diaphragms</p>
                            <p className='my-3'>

                                Rubber diaphragms are sealing materials used to prevent leakage or friction. They are designed Rubber diaphragms are a bar Rubber diaphragms are a bar Rubber diaphragms are a bar to withstand the effects of pressure while preventing any form of liquid from escaping. Rubber diaphragms are a barrier between two enclosures or chambers to prevent contaminants from entering.
                            </p>

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

        <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
            <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img6} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Rubber Isolators</p>
                        <p className='my-3'>

                            Rubber vibration isolators are used to protect machines and appliances from vibration damage and keep them level and stationary.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> Rubber Mounts
                        </p>
                        <p className='my-3'>

                            Rubber mounts are closely associated with isolators. The two parts of a rubber mount are the fastening mechanism and the isolator. The fastener is threaded metal.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img3} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Rubber Suction Cups  </p>
                        <p className='my-3'>

                            Rubber suction or vacuum cups are used as a handling system for manipulating items with a flat surface, such as glass, metal sheets, wood paneling, molded pieces, or tubes.
                        </p>

                    </div>
                </div>
            </div>
        </div>


        {/* <Footer /> */}
    </div>
}


export default Rubber