import React from 'react'
import Img1 from "../../asset/industries-img/Consumer/img-1.png"
import Img2 from "../../asset/industries-img/Consumer/img-2.png"
import Img3 from "../../asset/industries-img/Consumer/img-3.png"
import Img4 from "../../asset/industries-img/Consumer/img-4.png"
import Img5 from "../../asset/industries-img/Consumer/img-5.png"
import Img6 from "../../asset/industries-img/Consumer/img-6.png"
import Img7 from "../../asset/industries-img/Consumer/img-7.png"
import Img8 from "../../asset/industries-img/Consumer/img-8.png"

const Consumer = () => {
    return <div>
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Consumer Goods</div>
                    <div className=" text-base font-light pt-6">
                        In the dynamic landscape of consumer goods manufacturing, the imperative of short product cycles, cost pressures, and stringent quality demands necessitate an efficient approach. 3D scanning emerges as a pivotal solution by seamlessly capturing product intricacies and dimensions through advanced technologies.  By navigating the challenges of rapid product cycles and cost constraints, manufacturers can streamline their processes with 3D scanning, achieving an optimal balance between efficiency and excellence in the production of consumer goods.

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
                        Using advanced technologies like precision lasers, we meticulously capture the details of products, helping manufacturers keep up with short product cycles, cost pressures, and high-quality demands. Our services enable swift identification of improvements in design and ensure that products meet stringent quality standards. In a nutshell, we're here to make the development and production of consumer goods efficient, cost-effective, and precise.
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
                            <p className='font-semibold text-xl'>Footwear</p>
                            <p className='my-3'>

                                In the footwear industry, 3D scanning enables the creation of accurate digital models for shoes. This technology facilitates customized fittings, enhances design innovation, and streamlines the production of diverse footwear styles.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Sporting Goods</p>
                            <p className='my-3'>

                                In the sporting goods industry, 3D scanning is applied to optimize the design and performance of equipment such as bicycles, helmets, and sports gear. It aids in creating prototypes, refining designs, and ensuring manufacturing precision.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Footwear</p>
                            <p className='my-3'>
                                In the footwear industry, 3D scanning enables the creation of accurate digital models for shoes. This technology facilitates customized fittings, enhances design innovation, and streamlines the production of diverse footwear styles.
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
                        <p className='font-semibold text-xl'>Electronics</p>
                        <p className='my-3'>

                            3D scanning revolutionizes the design and manufacturing of electronics by capturing intricate details of devices like smartphones and tablets. It aids in prototyping, ensuring precise dimensions and seamless integration of components for enhanced performance.

                        </p>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Furniture </p>
                        <p className='my-3'>

                            3D scanning is utilized in the furniture industry for precise design capture and quality control. It aids in creating digital replicas of furniture pieces, refining designs, and ensuring accurate dimensions for efficient manufacturing.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Bronzo </p>
                        <p className='my-3'>
                            Rubber suction or vacuum cups are used as a handling system for manipulating items with a flat surface, such as glass, metal sheets, wood paneling, molded pieces, or tubes.
                        </p>

                    </div>
                </div>
            </div>
        </div>


    </div >
}


export default Consumer