import React from 'react'
import Img1 from "../../asset/industries-img/Defence/img-1.png"
import Img2 from "../../asset/industries-img/Defence/img-2.png"
import Img3 from "../../asset/industries-img/Defence/img-3.png"
import Img4 from "../../asset/industries-img/Defence/img-4.png"
import Img5 from "../../asset/Website-Picture-gallery/defence-img.webp"
import Img6 from "../../asset/industries-img/Defence/img-6.png"
import Img7 from "../../asset/industries-img/Defence/img-7.png"
import Img8 from "../../asset/industries-img/Defence/img-8.png"

const Defence = () => {
    return <div>
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Defence</div>
                    <div className=" text-base font-light pt-6">
                        3D scanning plays a crucial and multifaceted role in the defense industry, offering a range of applications that enhance product for smooth operations.3D scanning is a versatile and invaluable tool in the defense industry, contributing to improved design accuracy, manufacturing efficiency, equipment maintenance, and overall operational effectiveness.

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
                    <p>
                        KSD Technologies is a pioneering force in the defense industry, offering indispensable 3D scanning services across critical applications. Specializing in reverse engineering, we create precise digital replicas of existing defense equipment, ensuring the continuity of mission-critical systems. Recognizing the diverse needs of defense operations, we support customization through 3D scanning, tailoring military equipment to specific mission requirements.At KSD Technologies, we are committed to empowering the defense industry with precision, efficiency, and innovation to reinforce national security and mission success.
                    </p>
                </div>
            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-white">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Applications
                </div>
                <div className='bg-pink-600 w-28 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Prototyping</p>
                            <p className='my-3'>
                                3D scanning facilitates rapid prototyping by capturing precise details and dimensions of toy prototypes. This accelerates the product development cycle, allowing designers to quickly assess and refine their creations.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Aircraft and Vehicle Design</p>
                            <p className='my-3'>

                                In aerospace and military vehicle design, 3D scanning aids in capturing the aerodynamic profiles and structural details of complex components. This contributes to the optimization of designs for enhanced performance and efficiency.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img5} alt="" className="h-[19rem] lg:ms-[12%] md:ms-16 ms-[20%] w-auto object-cover" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Safety Equipments</p>
                            <p className='my-3'>
                                It is a piece of personal armor designed specifically to protect the head during combat.
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
                        <p className='font-semibold text-xl'>Reverse Engineering</p>
                        <p className='my-3'>

                            3D scanning allows for the precise capture of intricate details and dimensions of household items, facilitating accurate digital models. Designers can use this data to refine and optimize the aesthetics and functionality of products.

                        </p>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Customization of Equipment</p>
                        <p className='my-3'>
                            For household items that may need repair or replacement parts, 3D scanning aids in creating accurate digital models. This allows manufacturers to produce precise components, ensuring compatibility and efficient maintenance.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Maintenance and Repairs</p>
                        <p className='my-3'>
                            Toy designers can use 3D scanning to capture real-world objects or create digital replicas, fostering innovation in design. This technology allows for the creation of intricate and realistic toy models, expanding creative possibilities.
                        </p>

                    </div>
                </div>
            </div>
        </div>


    </div >
}

export default Defence