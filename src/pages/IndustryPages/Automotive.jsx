import React from 'react'
import Img1 from "../../asset/industries-img/Automotive/img-1.png"
import Img2 from "../../asset/industries-img/Automotive/img-2.png"
import Img3 from "../../asset/industries-img/Automotive/img-3.png"
import Img4 from "../../asset/industries-img/Automotive/img-4.png"
import Img5 from "../../asset/industries-img/Automotive/img-5.png"
import Img6 from "../../asset/industries-img/Automotive/img-6.png"
import Img7 from "../../asset/industries-img/Automotive/img-7.png"
import Img8 from "../../asset/industries-img/Automotive/img-8.png"
import Img9 from "../../asset/industries-img/Automotive/img-9.png"
import Img10 from "../../asset/industries-img/Automotive/img-10.png"

const Automotive = () => {
    return <div>
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Automotive Industry</div>
                    <div className=" text-base font-light pt-6">
                        3D scanning in the this industry involves using specialized equipment to capture the physical geometry of vehicles or individual components in three dimensions. This process typically utilizes laser or structured light scanners to measure and record the shape and contours of automotive surfaces. The collected data is then processed to create a detailed digital model, which can be used for various purposes. This technology allows for accurate and efficient documentation of complex automotive parts, aiding in the development and improvement of vehicle designs and components.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


        </div>

        <div className=" grid grid-cols-12 bg-black  text-black pt-16">

            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">What We Do?</div>
                <div className='border-b-4 w-28 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>Using sophisticated CAD software, our skilled engineers craft precise blueprints for vehicle design, ensuring meticulous attention to structural components, aesthetics, and interior layout. Leveraging cutting-edge techniques such as 3D printing, we validate designs thoroughly in the prototyping phase.</p>
                    <p className='mt-2'>
                        Our expertise extends to crafting specialized molds and tools for consistent mass production. Meticulous material preparation ensures raw materials meet design specifications, while stamping/pressing processes yield components of unparalleled accuracy. Skilled assembly follows, meeting rigorous quality and safety standards
                    </p>
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-white">
                <img src={Img2} alt="" className=" object-cover h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Automotive Sector Process
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Prototyping</p>
                            <p className='my-3 '>
                                Following the design phase, a physical prototype is produced. This tangible model serves as a testbed for assessing the design's practicality, functionality, and aesthetic appeal. Techniques like 3D printing or precision machining are often employed to create these prototypes with a high degree of accuracy.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Tooling</p>
                            <p className='my-3'>

                                Once the prototype is approved, the manufacturing process moves to tooling. Skilled craftsmen create specialized tools and molds, often made from durable materials like steel or aluminum. These molds will be used in the mass production of various vehicle components.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Stamping/Pressing</p>
                            <p className='my-3'>
                                Metal sheets go through a stamping or pressing process, where they are shaped into specific forms using the previously crafted molds. This step is crucial for producing consistent and precise components that will later be assembled consistent and precise components that into the final vehicle.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Assembly</p>
                            <p className='my-3 '>
                                In the assembly phase, various components, from the chassis to the engine and interior elements, are put together on the production line. Skilled workers follow detailed instructions to ensure each vehicle meets quality and safety standards.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img7} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Quality Control</p>
                            <p className='my-3'>

                                Rigorous testing and inspection processes are implemented throughout the manufacturing process. This includes checks for dimensional accuracy, structural integrity, and functionality, ensuring that each vehicle meets the predetermined quality standards.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img8} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Final Inspection</p>
                            <p className='my-3'>

                                This involves a thorough examination of all components to identify and address any defects or issues, guaranteeing a high-quality end product for
                                This involves a thorough examination of all components to identify and address any defects or  consumers.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='py-10 px-8 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img9} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Automotive  Design</p>
                            <p className='my-3'>

                                In the design phase, automotive engineers employ advanced computer-aided design (CAD) software to meticulously craft a blueprint for the vehicle. This includes detailing structural components, aerodynamics, and aesthetics, ensuring a comprehensive plan for manufacturing.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img10} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Material Preparation</p>
                            <p className='my-3'>

                                Raw materials, such as metals, plastics, and rubber, are prepared for shaping. This involves cutting, molding, or other processes to ensure that each material meets the exact specifications outlined in the design phase.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
}



export default Automotive