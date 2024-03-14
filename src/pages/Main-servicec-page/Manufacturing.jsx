import React from 'react'
import Img1 from "../../asset/main-services-page/Manufacturing/img-1.png"
import Img2 from "../../asset/main-services-page/Manufacturing/img-2.png"
import Img3 from "../../asset/main-services-page/Manufacturing/img-3.png"
import Img4 from "../../asset/main-services-page/Manufacturing/img-4.png"
import Img5 from "../../asset/main-services-page/Manufacturing/img-5.png"
import Img6 from "../../asset/main-services-page/Manufacturing/img-6.png"
import Img7 from "../../asset/main-services-page/Manufacturing/img-7.png"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const Manufacturing = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-10">

                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className="   object-cover " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Manufacturing</div>
                    {/* <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div> */}
                    <div className=" text-base font-light pt-6">
                        Manufacturing is taking raw materials and turning them into products you can use in your everyday life. Manufacturing plays a part in everything from the clothes you wear to the car you drive to the food you eat. It's an exciting field that involves taking raw materials, combining them together with other materials, and then transforming them into finished products. It's the backbone of many industries, and it's something that has been around for centuries.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold'>
                    OUR MANUFACTURING SERVICES
                </div>
                <div className='md:pb-10 lg:pb-12 text-lg md:w-[60%] lg:w-[50%] text-gray-300 py-8'>
                    <p>
                        KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-6 mt-8">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img2} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Plastic injection Mould</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <Link to="/manufacturing/plastic" className='font-semibold hover:text-pink-600 text-lg text-gray-600'>
                                Plastic injection Mould
                            </Link>

                            <div className='border-b-2 border-gray-600 mt-1 w-12'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Rubber Mould</p>
                            <p className='my-3'>
                                preliminary version of a product or system that is built to test a concept, process, or design. The main purpose of creating a prototype is to evaluate and validate ideas, functionalities, and design aspects before full-scale
                            </p>

                            <Link to="/manufacturing/rubber" className='font-semibold text-lg hover:text-pink-700 text-gray-600'>
                                Rubber Mould
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-14'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Casting & Froging Tool</p>
                            <p className='my-3'>
                                Manufacturing 3D scanning plays a significant role in various aspects of the production process, offering capabilities for quality control, reverse engineering, and the optimization of manufacturing workflows.
                            </p>
                            <p className='font-semibold text-lg text-gray-600'>
                                Casting & Froging Tool
                            </p>
                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className='py-10 px-8 '>




            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Jig & Fixtures</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <p className='font-semibold text-lg text-gray-600'>
                                Jig & Fixtures
                            </p>
                            <div className='border-b-2 border-gray-600 mt-1 w-28'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Injection Moulding</p>
                            <p className='my-3'>
                                preliminary version of a product or system that is built to test a concept, process, or design. The main purpose of creating a prototype is to evaluate and validate ideas, functionalities, and design aspects before full-scale
                            </p>
                            <p className='font-semibold text-lg text-gray-600'>
                                Injection Moulding
                            </p>
                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Industrial Fabrication</p>
                            <p className='my-3'>
                                Manufacturing 3D scanning plays a significant role in various aspects of the production process, offering capabilities for quality control, reverse engineering, and the optimization of manufacturing workflows.
                            </p>
                            <p className='font-semibold text-lg text-gray-600'>
                                Industrial Fabrication
                            </p>
                            <div className='border-b-2 border-gray-600 mt-1 w-20'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
}

export default Manufacturing