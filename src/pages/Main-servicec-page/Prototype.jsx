import React from 'react'
import Img1 from "../../asset/main-services-page/Prototype/img-1.png"
import Img2 from "../../asset/main-services-page/Prototype/img-2.png"
import Img3 from "../../asset/main-services-page/Prototype/img-3.png"
import Img4 from "../../asset/main-services-page/Prototype/img-4.png"
import Img5 from "../../asset/main-services-page/Prototype/img-5.png"
import Img6 from "../../asset/main-services-page/Prototype/img-6.png"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const Prototype = () => {
    return <div>
        <Navbar />
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-10">

                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className="   object-cover " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Prototype</div>
                    {/* <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div> */}
                    <div className=" text-base font-light pt-6">
                        Prototype are the limited representation of any idea or design. These are miniature models which are created in the prototyping phase of development of any physical product. The prototyping is an experimental process which caters some and/or a part of all the requirements of the actual model, and the goal is to persist a somewhat idea of the finalized product. Prototypes are tangible

                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>

            <div className='text-center flex-col flex items-center mt-10'>
                <div className='text-2xl font-bold'>
                    OUR CAD SERVICES
                </div>
                <div className='md:pb-10 lg:pb-12 text-lg md:w-[60%] lg:w-[50%] text-gray-300 py-5'>
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
                            <p className='font-semibold text-xl'>SLA</p>
                            <p className='my-3'>
                                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
                            </p>
                            <Link to="/prototype/slaPage">
                                <div className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                    SLA
                                </div>
                            </Link>
                            <div className='border-b-2 border-gray-600  mt-1 w-8'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>FDM</p>
                            <p className='my-3'>
                                preliminary version of a product or system that is built to test a concept, process, or design. The main purpose of creating a prototype is to evaluate and validate ideas, functionalities, and design aspects before full-scale
                            </p>
                            <Link to="/prototype/fdmPage">
                                <div className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                    FDM
                                </div>
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-10'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Poly Jet</p>
                            <p className='my-3'>
                                Class A surfacing refers to the creation of high-quality, aesthetically pleasing, and aesthetically pleasing refers precisely engineered 3D  concept, process, or design. surfaces in computer-aided design (CAD). (CAD).
                            </p>
                            <Link to="/prototype/polyjet">
                                <div className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                    Poly Jet
                                </div>
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className='py-10 px-8 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Metal Printing</p>
                            <p className='my-3'>
                                CAM, or Computer-Aided Manufacturing, is a technology that uses computer software and machinery to automate and control manufacturing processes.
                            </p>
                            
                            <Link to="/prototype/metal">
                                <div className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                Metal Printing
                                </div>
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-28'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>SLS</p>
                            <p className='my-3'>
                                Class A surfacing refers to the creation of high-quality, aesthetically pleasing, and precisely engineered 3D surfaces in computer-aided design (CAD).
                            </p>
                            <Link to="/prototype/slsPage">
                                <div className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                    SLS
                                </div>
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-8'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Prototype