import React from 'react'
import Img1 from "../../../asset/Website-Picture-gallery/1.jpg"
import Img2 from "../../../asset/main-services-page/cmd-service/Conversion/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/Conversion/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/Conversion/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/Conversion/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/Conversion/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/Conversion/img-7.png"
import Img8 from "../../../asset/main-services-page/cmd-service/Conversion/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const Conversion = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 ">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 lg:mt-10">
                    <div className="text-4xl font-bold">Conversion of 2D to 3D</div>
                    <div className=" text-base font-light pt-6">
                        To convert a 2D image to a 3D model, use software like Blender or Autodesk Fusion 360. Import the image, create a base mesh, and extrude or sculpt based on the image contours.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why 2D to 3D?
                </div>
                <div className='bg-pink-600 w-32 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12 gap-6 md:m-10  my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Enhanced Visualization</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Improved Collaboration
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Error Reduction
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Boosting Creativity
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Saving Money
                        </p>
                    </div>
                </div>


            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold "> How do you convert 2D to 3D?</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    In the field of visual processing, 3D image processing has become very popular in recent years. To produce a better display than the traditional 2D visual experience, 3D displays offer a number of new applications, including education, games, movies, cameras, etc., with 3D video generations still growing. The user only watches 3D animation or 3D movies made by a special camera on a computer. The lack of 3D videos makes 2D-to-3D image conversion quite practical.
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Convert 2D to 3D
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl '>Extrusion</p>
                            <p className='my-3'>
                                3D product design allows manufacturers to have a detailed estimation of the real-life proportions of the products (be they plastic or metal) and their quality much before the manufacturing process starts. After the products are modeled and made 3D print-ready, the 3D printing machine prints flawless products.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Depth Maps</p>
                            <p className='my-3'>
                                3D images and configurators have induced affirmative changes in the retail and eCommerce sectors. 3D modeling software gives the products point-to-point measurements, and  gives them a realistic outlook. Further enhancement by adjusting the color, shadow, etc. offers buyers a super-engaging shopping experience.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>3D Reconstruction from Multiple Images</p>
                            <p className='my-3'>

                                Automobile engineers use 3D industrial design to achieve a one-stop solution to all design-related problems! A 3D prototype remarkably reduces the TAT (turnaround time) during production. The 3D-modeled car or parts are made to look unusually real  texture, lighting, and shadow as necessary.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
            <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img6} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Depth Sensing Technologies</p>
                        <p className='my-3'>

                            Initially, pen and paper were the only way fashion designers executed any design, be it clothing, jewelry, cosmetic products, or even croquis (the initial sketch of the fashion product).
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> 3D Modeling Software</p>
                        <p className='my-3'>

                            Architects use 3D product design to make a digital presentation of a building, the housing plan, the room layout, the floor plan, the kitchen outlook, or even the items for interior decoration look unbelievably real.

                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> 3D Printing from 2D Designs</p>
                        <p className='my-3'>
                            The medical industry is one of the fastest adopters of 3D product design technology. The prototypes of various surgical instruments, scanning machines, teeth aligners, implants, and body organs, including the skeleton,
                        </p>

                    </div>
                </div>
            </div>
        </div> */}

        {/* <Footer /> */}
    </div>
}

export default Conversion