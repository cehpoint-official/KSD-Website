import React from 'react'
import Img1 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-1.png"
import Img2 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-7.png"
import Img8 from "../../../asset/main-services-page/cmd-service/Surface-Modeling/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const SurfaceMod = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-10">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Surface Modeling & Solid Modeling</div>
                    <div className=" text-base font-light pt-6">
                        Surfacing is a process of fitting surface entity in a cloud of points ensuring specified geometric tolerances.
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

            <div className='grid grid-cols-12  gap-6 md:m-10  my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Allows to create more free-form shapes.</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            more definitive in nature
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            No unnecessary ambiguity
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Creation of complex surfaces is easier
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            More realistic approach
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            safer and cheaper
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold "> Surfacing Work </div>
                <div className='border-b-4 w-36 mt-3 border-pink-600'></div>

                <div className=" pt-6">

                    Surfacing is required in order to use the scan data for machining smooth surfaces mainly for die/mould production, analysis, digital mockups or packaging purposes.A highly qualified and skilled team of Engineers at KSD regularly carry out surfacing and solid modeling activity after whitelight scanning of the physical part
                    In addition to Multiple licences of Imageware surfacing software APM has inhouse software licenses and expertise on Unigraphics NX, Ideas and Pro-E wildfile
                    The art and science of surfacing is practiced for all possible applications regularly

                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover h-[30rem] w-full" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Types of Modeling
                </div>
                <div className='bg-pink-600 w-32 mt-3 h-1'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>plane surfaces</p>
                            <p className='my-3'>
                                Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time.Scantech has field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Ruled surfaces</p>
                            <p className='my-3'>
                                A safe journey begins with precise inspection of transports.been deeply engaged in the  We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results, our 3D scanning technology can ensure the safe operation of rail transport and ship.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Surface of revolution</p>
                            <p className='my-3'>
                                Scantech is empowering the development of the energy industry with advanced 3D technology. We are committed to helping realize the goal of carbon neutrality, promote the upgrading of heavy machinery industry, and further improve intelligent manufacturing productivity.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
            <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img4} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> parametric cubic surfaces</p>
                        <p className='my-3'>
                            Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Bezier surfaces</p>
                        <p className='my-3'>
                            A safe journey begins with precise inspection of transports. We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results,
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> B-spline surfaces</p>
                        <p className='my-3'>
                            Scantech is empowering the development of the energy industry with advanced 3D technology. We are committed to helping realize the goal of carbon neutrality,
                        </p>

                    </div>
                </div>
            </div>
        </div>


        {/* <Footer /> */}
    </div>
}

export default SurfaceMod


