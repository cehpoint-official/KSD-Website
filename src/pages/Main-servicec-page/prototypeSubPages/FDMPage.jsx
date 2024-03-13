import React from 'react'
import Img1 from "../../../asset/main-services-page/Prototype/fdm/img-1.png"
import Img2 from "../../../asset/main-services-page/Prototype/fdm/img-2.png"
import Img3 from "../../../asset/main-services-page/Prototype/fdm/img-3.png"
import Img4 from "../../../asset/main-services-page/Prototype/fdm/img-4.png"
import Img5 from "../../../asset/main-services-page/Prototype/fdm/img-5.png"
import Img6 from "../../../asset/main-services-page/Prototype/fdm/img-6.png"
import Img7 from "../../../asset/main-services-page/Prototype/fdm/img-7.png"
import Img8 from "../../../asset/main-services-page/Prototype/fdm/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const FDMPage = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-10">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">What is FDM?</div>
                    <div className=" text-base font-light pt-6">
                        FDM stands for fused deposition modeling. This printing technique involves building a part or prototype layer by layer using plastic filaments that are extruded from a nozzle. The range of designs is quite versatile; you can use FDM to print complex geometries as well as simple housings and fixtures.

                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-10'>
                <div className='text-2xl font-bold '>
                    Why FDM 3d printing?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-1'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10 my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Wide Range of Material Selection</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Scalability and
                            Affordable
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Can work With Many Materials
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Modelling Can Be
                            Very Detailed
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Filaments Aren't Easily Contaminated
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Fused Deposition Modeling Is Easy.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Why our FDM 3D printing service?</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600'></div>

                <div className=" pt-6">
                    <p>
                        Before the FDM printing process begins, a design is input into the printer’s computer. The computer is equipped with a computer-aided design (CAD) program, which divides the build into different layers or cross sections.
                        Once this step is complete, nozzles located inside the printer distributes heated plastic filaments onto a build platform to form each cross section of the part. Once one layer is complete, the build platform lowers so that the nozzles can start constructing the layer above it. This process is repeated layer by layer until the desired part is built.
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
                    Available materials for FDM
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-1'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Nylon(PA)</p>
                            <p className='my-3'>
                                Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Polylactic Acid(PLA)</p>
                            <p className='my-3'>

                                Somos resin is an fast printing material that produces high quality parts with great details. The final finishing is outstanding and almost achieve the industry injection plastic quality. It is perfect for building end-use parts or prototypes for functional testing applications

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>PC</p>
                            <p className='my-3'>
                                Tough Resin simulates the feel and many of the important mechanical properties of ABS plastic. Consider using this material for works-like prototypes and assemblies, including designs with snap fit joints and living hinges. For further finishing, Tough once printed.
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
                        <p className='font-semibold text-xl'>TPU</p>
                        <p className='my-3'>
                            A 20% wax-filled material for reliable casting with zero ash content and clean burnout.A 20% wax-filled material for reliable casting with zero ash content and clean burnout.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>ABS</p>
                        <p className='my-3'>

                            High-temperature resins are a type of polymer that can withstand elevated temperatures without significant degradation. These resins find applications in various industries where exposure to heat is a critical factor.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> Acrylonitrile Styrene Acrylate </p>
                        <p className='my-3'>
                            Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
                        </p>

                    </div>
                </div>
            </div>
        </div>


        {/* <Footer /> */}
    </div>
}

export default FDMPage