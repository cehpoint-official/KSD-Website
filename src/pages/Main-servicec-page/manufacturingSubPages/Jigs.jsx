import React from 'react'
import Img1 from "../../../asset/main-services-page/Manufacturing/jigs/img-1.png"
import Img2 from "../../../asset/main-services-page/Manufacturing/jigs/img-2.png"
import Img3 from "../../../asset/main-services-page/Manufacturing/jigs/img-3.png"
import Img4 from "../../../asset/main-services-page/Manufacturing/jigs/img-4.png"
import Img5 from "../../../asset/main-services-page/Manufacturing/jigs/img-5.png"
import Img6 from "../../../asset/main-services-page/Manufacturing/jigs/img-6.png"
import Img7 from "../../../asset/main-services-page/Manufacturing/jigs/img-7.png"
import Img8 from "../../../asset/main-services-page/Manufacturing/jigs/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const Jigs = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Jigs & Fixtures</div>
                    <div className=" text-base font-light pt-6">
                        We support different drill jigs, VMC system fixtures, testing attachments run out. These jigs & attachments are built on specific machines such as VMC, CNC, and Cylindrical Grinding & Surface Grinding. Jigs and fixtures are two distinct terms.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why Jigs & Fixtures?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10 my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>It eliminates the setting time required before machining.</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            They reduce the production cost
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            They simplify the work handling.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Requires less skilled operation.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Increases machine and labor utilization.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Increases the quality of production in the industry.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Our Jigs & Fixtures Manufacturing</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>
                        Jigs and fixtures are commonly used in the automotive industry and are produced using advanced manufacturing technologies and components tested for consistency. Such jigs and fixtures are provided in a range of configurations according to our clients requirements and made available at industry-leading prices.
                    </p>
                    <p className='mt-3'>
                        We give the quality assured products.
                    </p>

                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-white">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    The Material Available  For Jigs And Fixtures
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Grey cast iron</p>
                            <p className='my-3'>

                                Rubber bumpers come in a variety of shapes and sizes to be used in manufacturing specific products such as recessed, mushroom, stem, grommet, and tack bumpers. Bumpers reduce vibration and movement in equipment to protect rigid parts from damage caused by vibrations and impact. They protect furniture, work surfaces, circuit boards, displays, and packaging.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Hardened steel</p>
                            <p className='my-3'>
                                Rubber bushings are somewhat like rubber bumpers since they are designed to absorb vibrations and impact on machinery. They are shaped and configured to fit specific applications, though the most common form is a cylinder. Rubber bushings can be placed on a machine to reduce vibrations or between two pieces of equipment to prevent vibration transfer.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Carbide</p>
                            <p className='my-3'>
                                Rubber diaphragms are sealing materials used to prevent leakage or friction. They are designed to withstand the effects of pressure while preventing any form of liquid from escaping. Rubber diaphragms are a  pressure ing. Rubber diaphragms are a  p while preventing any form of liquid  barrier between two enclosures or chambers to prevent contaminants from entering.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
            <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img6} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Epoxy resins</p>
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
                        <p className='font-semibold text-xl'>Plastic
                        </p>
                        <p className='my-3'>

                            Rubber mounts are closely associated with isolators. The two parts of a rubber mount are the fastening mechanism and the isolator. The fastener is threaded metal.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Stainless steel  </p>
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

export default Jigs