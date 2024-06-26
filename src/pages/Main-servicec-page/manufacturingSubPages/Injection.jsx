import React from 'react'
import Img1 from "../../../asset/main-services-page/Manufacturing/injection/img-1.png"
import Img2 from "../../../asset/main-services-page/Manufacturing/injection/img-2.png"
import Img3 from "../../../asset/main-services-page/Manufacturing/injection/img-3.png"
import Img4 from "../../../asset/main-services-page/Manufacturing/injection/img-4.png"
import Img5 from "../../../asset/main-services-page/Manufacturing/injection/img-5.png"
import Img6 from "../../../asset/main-services-page/Manufacturing/injection/img-6.png"
import Img7 from "../../../asset/main-services-page/Manufacturing/injection/img-7.png"
import Img8 from "../../../asset/main-services-page/Manufacturing/injection/img-8.png"

const Injection = () => {
    return <div>
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Injection Moulding</div>
                    <div className=" text-base font-light pt-6">
                        Injection molding is a method to obtain molded products by injecting plastic materials molten by heat into a mold, and then cooling and solidifying them. The method is suitable for the mass production of products with complicated shapes, and takes a large part in the area of plastic processing.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why Injection Moulding?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10 my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Low labour costs. </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Design flexibility
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            High-output production
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Large material choice
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Low scrap rates.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Good colour control
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Our Injection Moulding Services</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>
                        KSD provider of advanced plastic injection molding services. We offer a complete manufacturing solution that covers every aspect of raw material verification, tool making, part fabrication, finishing, and final inspection. Our international team of manufacturing experts is committed to providing you with the highest level of professional support for plastic injection molding services of any size or complexity
                    </p>
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-white">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        {/* <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Types of Injection Moulding
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Liquid silicone rubber</p>
                            <p className='my-3'>

                                Rubber bushings are somewhat like rubber bumpers since they are designed to absorb vibrations and impact on machinery. They are shaped and configured to fit specific applications, though the most common form is a cylinder. Rubber bushings can be placed on a machine to reduce vibrations .
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Cube moulding</p>
                            <p className='my-3'>

                                Rubber diaphragms are sealing materials used to prevent leakage or friction. They are designed to withstand the effects of pressure while preventing any form of liquid from escaping. Rubber diaphragms are a barrier between two enclosures or chambers to prevent contaminants from entering.
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
                                Rubber diaphragms are sealing materials used to prevent leakage or friction. They are designed to withstand the effects of pressure while preventing any form of liquid from escaping. Rubber diaphragms are a  pressure ing. Rubber diaphragms are a  p while preventing any form of liquid .
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
            <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img6} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Die casting</p>
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
                        <p className='font-semibold text-xl'> Reaction injection moulding
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
                        <p className='font-semibold text-xl'>Micro injection moulding  </p>
                        <p className='my-3'>
                            Rubber suction or vacuum cups are used as a handling system for manipulating items with a flat surface, such as glass, metal sheets, wood paneling, molded pieces, or tubes.
                        </p>

                    </div>
                </div>
            </div>
        </div> */}


    </div >
}

export default Injection