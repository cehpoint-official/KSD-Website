import React from 'react'
import Img1 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-1.png"
import Img2 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/Class-Surfacing/img-7.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const ClassSurface = () => {
    return <div>
        <Navbar />
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-10">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Class  ‘A’  Surfacing</div>
                    <div className=" text-base font-light pt-6">
                        In automotive design, a class A surface is any of a set of free form surfaces of high efficiency and quality. The minimum math requirement for Class A Surface is that the transition across the edge is a continuous curvature.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-10'>
                <div className='text-2xl font-bold '>
                    Why Surface Modeling & Solid Modeling?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-1'></div>
            </div>

            <div className='grid grid-cols-12 gap-14  m-14'>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Increased flexibility</p>
                    </div>
                </div>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Can create elegant one
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            It ispractica
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            control over the form of the surface.
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Can create complex designs
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            allows to create more free-form shapes.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">  Importance </div>
                <div className='border-b-4 w-32 mt-3 border-pink-600'></div>

                <div className=" pt-6">
                    <p>
                        Another way to describe this is in a situation where a reflection is cast upon the surfaces and you would not be able to tell where one patch ends and the other begins. Class A Surfacing’ needs a fine blend of keen visualization skills, artistic insight Engineering, Experience and domain knowledge.
                    </p>

                    <p className='mt-14'>
                        KSD services has a team, capable of delivering Class A surface requirements usually for Visual and Artistic parts, including Automotive Exteriors.
                    </p>
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" h-[30rem] object-cover w-full" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Techniques and Tools
                </div>
                <div className='bg-pink-600 w-36 mt-3 h-1'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>  Curve Generation</p>
                            <p className='my-3'>
                                Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time.Scantech has been deeply acturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Surface Creation</p>
                            <p className='my-3 py-2 pb-3'>

                                A safe journey begins with precise inspection of transports. We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results, our 3D scanning technology can ensure the safe operation of rail transport and ship.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Editing and Manipulation</p>
                            <p className='my-3'>
                                Scantech is empowering the development of the energy industry with advanced 3D technology. We are committed to helping realize the goal of carbon neutrality, promote the upgrading of heavy machinery industry, and further improve intelligent manufacturing productivity.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='py-10 px-10 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Blending and Filleting</p>
                            <p className='my-3'>
                                Blending and Filleting
                                Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Trimming and Splitting</p>
                            <p className='my-3'>
                                A safe journey begins with precise inspection of transports. We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results,
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}


export default ClassSurface