import React from 'react'
import Img1 from "../../../asset/main-services-page/cmd-service/Drafting/img-1.png"
import Img2 from "../../../asset/main-services-page/cmd-service/Drafting/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/Drafting/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/Drafting/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/Drafting/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/Drafting/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/Drafting/img-7.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const Drafting = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">2d Drafting</div>
                    <div className=" text-base font-light pt-6">
                        2D drafting and drawing is the process of creating and editing technical drawings, as well as annotating designs. Drafters use computer-aided design (CAD) software to develop floor plans, building permit drawings, building inspection plans and landscaping layouts.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why 2d Drafting?
                </div>
                <div className='bg-pink-600 w-36 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12 gap-6 md:m-10  my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Accuracy</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Communication
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Universal standards
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Cost-effective
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Easily accessible and editable
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Collaborative interface
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">  Importance </div>
                <div className='border-b-4 w-32 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>

                        2D drawings follow universal standards. They are easy to read, can be handled in a variety of settings (unlike a computer screen), and can clearly emphasize critical dimensions and tolerances. In short, manufacturers still speak the language of 2D technical drawingsDigital 3D files have changed the way engineers work with manufacturers. Engineers can now design a part using CAD software, send the digital file to a manufacturer, and have the manufacturer make the part directly from the file using digital manufacturing techniques like CNC machining.
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
                    Services
                </div>
                <div className='bg-pink-600 w-36 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Plumbing Drafting Services</p>
                            <p className='my-3'>
                                3D product design allows manufacturers to have a detailed estimation of the real-life proportions of the products (be they plastic or metal) and their quality much before the manufacturing process starts. After the products are modeled and made 3D print-ready, the 3D printing machine prints flawless products.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>  2D CAD Drawing Services</p>
                            <p className='my-3'>
                                3D images and configurators have induced affirmative changes in the retail and eCommerce sectors. 3D modeling software gives the products point-to-point measurements, and adding the required texture gives them a realistic outlook. Further enhancement by adjusting the color, shadow, etc.  super-engaging shopping experience.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> CAD Conversion Services</p>
                            <p className='my-3'>
                                Automobile engineers use 3D industrial design to achieve a one-stop solution to all design-related problems! A 3D prototype remarkably reduces the TAT (turnaround time) during production. The 3D-modeled car or parts are made to look unusually real by applying the needed texture, lighting, and shadow as necessary.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className='py-10 px-10 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Paper To CAD Conversion</p>
                            <p className='my-3'>
                                Initially, pen and paper were the only way fashion designers executed any design, be it clothing, jewelry, cosmetic products, or even croquis (the initial sketch of the fashion product).
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Blueprint To CAD Conversion</p>
                            <p className='my-3'>
                                Architects use 3D product design to make a digital presentation of a building, the housing plan, the room layout, the floor plan, the kitchen outlook, or even the items for interior decoration look unbelievably real.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <Footer /> */}
    </div>
}


export default Drafting