import React from 'react'
import Img1 from "../../asset/Website-Picture-gallery/2.jpg"
import Img2 from "../../asset/Website-Picture-gallery/plastic-img.jpg"
import Img3 from "../../asset/Website-Picture-gallery/rubber-img.webp"
import Img4 from "../../asset/Website-Picture-gallery/casting.webp"
import Img5 from "../../asset/Website-Picture-gallery/jig.webp"
import Img6 from "../../asset/Website-Picture-gallery/injection-img.png"
import Img7 from "../../asset/Website-Picture-gallery/01.jpg"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const Manufacturing = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-10">

                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" w-full  object-cover h-[20rem] " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Manufacturing</div>
                    {/* <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div> */}
                    <div className=" text-base font-light pt-6">
                        Manufacturing is the process of turning raw materials or parts into finished goods through the use of tools, human labor, machinery, and chemical processing. Most products were handmade using human labor and basic tools before the Industrial Revolution.
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
                    <img src={Img2} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Plastic injection Mould</p>
                            <p className='lg:my-6 my-3'>
                                Extrusion molding involves forcing melted plastic through a die into a shape with a fixed cross section. It's an efficient way to produce many shapes. Since the plastic is melted from a solid form and then resolidified, only thermoplastics can undergo extrusion.
                            </p>
                            <Link to="/manufacturing/plastic" className='font-semibold hover:text-pink-600 text-lg text-gray-600'>
                                Plastic injection Mould
                            </Link>

                            <div className='border-b-2 border-gray-600 mt-1 w-12'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full h-[18rem] object-fill " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Rubber Mould</p>
                            <p className='my-3'>
                                Rubber molding is a process of transforming uncured rubber or an elastomer into a usable product by transferring, compressing, or injecting raw rubber material into a metal mold cavity. The most common methods for rubber molding are injection, compression, and transfer.
                            </p>

                            <Link to="/manufacturing/rubber" className='font-semibold text-lg hover:text-pink-700 text-gray-600'>
                                Rubber Mould
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-14'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Casting & Froging Tool</p>
                            <p className='my-3'>
                                Casting is the process in which metal is heated in a furnace until molten. While in the liquid state, the metal is poured in a die, or mold, to create a component shape. Forging is the process in which thermal and mechanical energy is applied to ingots to cause the alloy to change shape while in a solid state.
                            </p>
                            <Link to="/manufacturing/casting" className='font-semibold text-lg hover:text-pink-600 text-gray-600'>
                                Casting & Froging Tool
                            </Link>

                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className='py-10 px-8 '>

            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Jig & Fixtures</p>
                            <p className='my-3'>
                                The two terms are often used incorrectly as synonyms but serve different purposes. A jig controls and guides the cutting tool to work at a predefined location on a workpiece. Fixtures are used for supporting and locating a workpiece. Fixtures do not guide the tool on a workpiece like a jig.
                            </p>
                            <Link to="/manufacturing/jig" className='font-semibold hover:text-pink-600 text-lg text-gray-600'>
                                Jig & Fixtures
                            </Link>

                            <div className='border-b-2 border-gray-600 mt-1 w-28'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Injection Moulding</p>
                            <p className='lg:my-6 my-3'>
                                Fabrication is the process of constructing products by combining typically standardised parts using one or more individual processes. For example, steel fabrication is the production of metal structures using a range of processes such as cutting, bending and assembling.
                            </p>
                            <Link to="/manufacturing/injection" className='font-semibold hover:text-pink-600  text-lg text-gray-600'>
                                Injection Moulding
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Industrial Fabrication</p>
                            <p className='lg:my-6 my-3'>
                                Fabrication is the process of constructing products by combining typically standardised parts using one or more individual processes. For example, steel fabrication is the production of metal structures using a range of processes such as cutting, bending and assembling.
                            </p>
                            <Link to="/manufacturing/industrial" className='font-semibold hover:text-pink-600  text-lg text-gray-600'>
                                Industrial Fabrication
                            </Link>

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