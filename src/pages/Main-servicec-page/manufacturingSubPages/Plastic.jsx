import React from 'react'
import Img1 from "../../../asset/Website-Picture-gallery/plastic-img.jpg"
import Img2 from "../../../asset/main-services-page/Manufacturing/plastic/img-2.png"
import Img3 from "../../../asset/main-services-page/Manufacturing/plastic/img-3.png"
import Img4 from "../../../asset/main-services-page/Manufacturing/plastic/img-4.png"
import Img5 from "../../../asset/main-services-page/Manufacturing/plastic/img-5.png"
import Img6 from "../../../asset/main-services-page/Manufacturing/plastic/img-6.png"
import Img7 from "../../../asset/main-services-page/Manufacturing/plastic/img-7.png"
import Img8 from "../../../asset/main-services-page/Manufacturing/plastic/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const Plastic = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 pb-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill w-full   " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 lg:mt-20">
                    <div className="text-4xl font-bold">Plastic Injection mould</div>
                    <div className=" text-base font-light pt-6">
                        Extrusion molding involves forcing melted plastic through a die into a shape with a fixed cross section. It's an efficient way to produce many shapes. Since the plastic is melted from a solid form and then resolidified, only thermoplastics can undergo extrusion.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why Plastic Injection mould?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12  gap-6 md:m-10 my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>Longer turnaround times</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            High volume production runs
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Final part design
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Parts of any size or complexity
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            minimises molding costs
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Low waste
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Injection process</div>
                <div className='border-b-4 w-48 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>
                        Usually, the plastic materials are formed in the shape of pellets or granules and sent from the raw material manufacturers in paper bags. With injection moulding, pre-dried granular plastic is fed by a forced ram from a hopper into a heated barrel. As the granules are slowly moved forward by a screw-type plunger, the plastic is forced into a heated chamber, where it is melted. As the plunger advances, the melted plastic is forced through a nozzle that rests against the mould, allowing it to enter the mould cavity through a gate and runner system.[26] The mould remains cold so the plastic solidifies almost as soon as the mould is filled
                    </p>

                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        {/* <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Available materials for Plastic Injection mould
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Nylon</p>
                            <p className='my-3'>
                                High-density polyethylene is injection moulding materials which is a resilient, solid plastic thermoplastic mainly in plastic bottles, shampoo bottles, toys, recycling bins as well as flower pots. The main advantage of using HDPE is that it’s  stiff material with high strength.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>High-Density Polyethylene (HDPE)</p>
                            <p className='my-3'>
                                Somos resin is an fast printing material that produces high quality parts with great details. The final finishing is outstanding and almost achieve the industry injection plastic quality. It is perfect for building end-use parts or prototypes for functional testing

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Polyoxymethylene (POM)</p>
                            <p className='my-3'>

                                Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
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
                        <p className='font-semibold text-xl'>Thermoplastic Polyurethane</p>
                        <p className='my-3'>

                            High-temperature resins are a type of polymer that can withstand elevated temperatures without significant degradation. These resins find applications in various industries where exposure to heat is a critical factor.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Acrylic Poly
                        </p>
                        <p className='my-3'>
                            Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> Rigid Opaque Materials  </p>
                        <p className='my-3'>
                            Fine details and the basic resin for modeling and prototyping. Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.Sharp edges and smooth finish. Great for small and complex projects. Comes in multiple colors.
                        </p>

                    </div>
                </div>
            </div>
        </div> */}


        {/* <Footer /> */}
    </div>
}

export default Plastic