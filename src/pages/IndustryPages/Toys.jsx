import React from 'react'
import Img1 from "../../asset/industries-img/Toys/img-1.png"
import Img2 from "../../asset/industries-img/Toys/img-2.png"
import Img3 from "../../asset/industries-img/Toys/img-3.png"
import Img4 from "../../asset/industries-img/Toys/img-4.png"
import Img5 from "../../asset/industries-img/Toys/img-5.png"
import Img6 from "../../asset/industries-img/Toys/img-6.png"
import Img7 from "../../asset/industries-img/Toys/img-7.png"
import Img8 from "../../asset/industries-img/Toys/img-8.png"

const Toys = () => {
    return <div>
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Toys</div>
                    <div className=" text-base font-light pt-6">
                        In household goods, 3D scanning stands as a transformative technology, offering a a lot of advantages across design, manufacturing, and quality control. By capturing details and dimensions with precision, it facilitates the optimization of product designs. Rapid prototyping is streamlined, enabling efficient product development cycles. Moreover, during manufacturing, 3D scanning ensures the adherence to strict design standards, reducing defects and elevating overall product quality.

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
                        KSD Technologies facilitates customization by employing 3D scanning to capture unique shapes and features, allowing for personalized and market-responsive toy designs. Our services extend to archiving and restoration, preserving the heritage of  collectible toys through detailed digital replicas.
                        At KSD Technologies, our commitment is not just to enhance the efficiency of toy production but also to contribute to sustainability by minimizing waste and supporting accurate inventory management. With a focus on innovation, precision, and quality, we stand as a trusted partner in shaping the future of the toy industry through advanced 3D scanning services.
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
                    Precision and Innovation
                </div>
                <div className='bg-pink-600 w-36 mt-3 h-[3px] rounded-xl'></div>
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
                {/* <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className=' bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Safety Compliance</p>
                            <p className='my-3'>
                                3D scanning supports the creation of toys that meet strict safety standards. Manufacturers can use this technology to identify potential safety issues early in the design phase, ensuring compliance with regulations and enhancing child safety.

                            </p>

                        </div>
                    </div>
                </div> */}
                <div class="lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img5} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>  Efficient Manufacturing</p>
                            <p className='my-3'>
                                Household Industry is defined as an industry conducted by one or more members of the household at home or within the village in rural areas and only within the precincts of the house where the household lives in urban areas

                                They are called so because they are small scale industries which require less capital and employ few people. Production also takes place in small quantities. Basket weaving, local bakeries and handicrafts fall under these categories
                            </p>

                        </div>
                    </div>
                </div>
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 bg-white ...">
                    <img src={Img6} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500   text-black p-5'>
                            <p className='font-semibold text-xl'> Design Optimization</p>
                            <p className='my-3'>
                                3D scanning allows for the precise capture of intricate details and dimensions of household items, facilitating accurate digital models. Designers can use this data to refine and optimize the aesthetics and functionality of products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
           
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>Repair and Replacement </p>
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
                        <p className='font-semibold text-xl'> Design Innovation </p>
                        <p className='my-3'>
                            Toy designers can use 3D scanning to capture real-world objects or create digital replicas, fostering innovation in design. This technology allows for the creation of intricate and realistic toy models, expanding creative possibilities.
                        </p>

                    </div>
                </div>
            </div>
        </div> */}


    </div >
}

export default Toys