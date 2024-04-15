import React, { useEffect } from 'react'
import Img1 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-1.png"
import Img2 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-7.png"
import Img8 from "../../../asset/main-services-page/cmd-service/Reverse-Eng/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const ReverseEng = () => {

    return <div>
        {/* <Navbar /> */}
        <div className='  py-10 px-8 bg-black '>
            <div className="bg-black text-white grid grid-cols-12  gap-4 py-14">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-cover h-full " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Reverse Engineering</div>
                    <div className=" text-base font-light pt-6">
                        Inspection, a process to ensure that products are free from defects, is essential for manufacturing, especially for high-precision parts. The requirements for inspection are increasing as the manufacturing technology improves.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>
        </div>

        <div className='grid grid-cols-12 gap-1 mb-20  mt-16'>
            <div className='md:col-span-5 col-span-12 md:border-e md:ps-0 mb-10 ps-10 border-slate-500 md:relative '>
                <div className='md:-rotate-90 md:absolute h-full font-bold md:-right-60 text-4xl'>
                    <p className='text-red-600'>Why</p>
                    <p className='text-slate-800'> Reverse Engineering?</p>
                </div>
            </div>
            <div className='md:col-span-7 col-span-12 md:border-s-2 border-slate-500  px-10'>
                <ul className="list-disc list-inside space-y-4 text-2xl text-slate-900">
                    <li className=''>Enhances product competitiveness</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                    <li className=''>Design and generate cad models</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                    <li className=''>Enhances product competitiveness</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                    <li className=''>Inspiring Innovation</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                    <li className=''>Repairing existing products</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                    <li className=''>Vulnerability discovery</li>
                    <div className='border-b-[1px] w-44 border-slate-300 '></div>
                </ul>

            </div>

        </div>


        {/* <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why Reverse Engineering?
                </div>
                <div className='border-pink-600 w-48 mt-3 border-[1.5px] rounded-lg'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10  my-10'>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Enhances product competitiveness</p>
                    </div>
                </div>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Design and generate cad models
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Improves product understanding
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Inspiring Innovation
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Repairing existing products
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 bg-red-300 bg-opacity-15 rounded-xl h-24 p-3 pt-5 hover:bg-opacity-25  my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Vulnerability discovery
                        </p>
                    </div>
                </div>

            </div> */}


        <div className=" grid grid-cols-12 mt-10 text-black mx-6">

            <div className=" col-span-12 md:col-span-6 lg:col-span-6 p-4 flex items-center ">
                <img src={Img2} alt="" className=" object-cover lg:h-[20rem] h-full w-full  " />
            </div>

            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-4 ">
                <div className="md:text-4xl text-3xl font-semibold ">3D Scan to CAD model</div>
                <div className='border-2 rounded-xl w-48 mt-3 border-red-600'></div>

                <div className=" pt-6">
                    You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust. As you’re in control of the entire process you get exactly the result you want.Reverse Engineering offers a range of functions to help you achieve the highest accuracy for free form surfaces. For instance: To convert your mesh, choose “Surface Approximation to Points” then the software guides you to your mold.Take your designs to the next dimension with our parametric 3D modeling services. We create 3D models for parts and assemblies that are not only visually stunning but also highly functional.
                </div>

            </div>

        </div>
        <div className='mx-10 my-14'>
            <div className='text-3xl my-4'>
                <p className='font-semibold'>How do We work?</p>
                <div className='border-2 border-red-600 w-60 mt-2'></div>
            </div>

            <div className='grid grid-cols-12  gap-4'>
                <div className='md:col-span-6 col-span-12'>
                    <p>
                        You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust. As you’re in control of the entire process you get exactly the result you want.Reverse Engineering offers a range of functions to help you achieve the highest accuracy for free form surfaces.
                    </p>
                    <p className='hidden lg:block'>
                        For instance: To convert your mesh, choose “Surface Approximation to Points” then the software guides you to your mold.Take your designs to the next dimension with our parametric 3D modeling services. We create 3D models. You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust. As
                        You want to reverse engineer a Simp. You want to reverse engineer a geometric shaped part? SimpYou want to reverse engineer a geometric shaped part? SimpYou want to reverse engineer a geometric shaped part?
                    </p>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <img src={Img8} alt="" className='object-fill h-full' />
                </div>

            </div>
            <p className='mt-1'>
                You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust. As you’re in control of the entire process you get exactly the result you want.Reverse Engineering offers a range of functions to help you achieve the highest accuracy for free form surfaces. For instance: To convert your mesh, choose “Surface Approximation to Points” then the software guides you to your mold.Take your designs to the next dimension with our parametric 3D modeling services. We create 3D models.
                You want to reverse engineer a geometric shaped part? Simp. You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust. As you’re in control of the entire process you get exactly the result you want.Reverse Engineering offers a range of functions to help you achieve the highest accuracy for free form surfaces. For instance: To convert your mesh, choose “Surface Approximation to Points” then the software guides you to your mold.Take your designs to the next dimension with our parametric 3D modeling services. We create 3D models.. You want to reverse engineer a geometric shaped part? Simply export your mesh to Reverse Engineering, then start to create, combine, extract and adjust.
            </p>
        </div>

        {/* <div className='bg-black text-white p-10 pt-32  '>

            <div className='text-center flex-col flex items-center '>
                <div className='md:text-4xl text-3xl font-bold '>
                    From 3D scan data to CAD model
                </div>
                <div className='border-pink-600 w-48 mt-3 border-2 rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>One window Reverse Engineering Services encompassing</p>
                            <p className='my-3 '>
                                Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>3D Scanning and Photo grammetry </p>
                            <p className='my-3'>
                                Somos resin is an fast printing material that produces high quality  building  parts with great details. The final finishing is outstanding and almost high quality parts with great achieve the industry injection plastic quality. It is perfect for building end-use parts or prototypes for functional testing applications
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Surfacing</p>
                            <p className='my-3'>
                                Tough Resin simulates the feel and many of the important mechanical properties of ABS plastic. Consider using this material for works-like prototypes and assemblies, including designs with snap fit joints and living hinges. For further finishing, Tough resin can also be machined once printed.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        {/* <div className='py-10 px-8 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Solid Modeling</p>
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
                            <p className='font-semibold text-xl'> Core-Cavity generations what customers want and one window service is what KSD gives.</p>
                            <p className='my-3'>

                                High-temperature resins are a type of polymer that can withstand elevated temperatures without significant degradation.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <Footer /> */}
    </div>
}

export default ReverseEng

