import React from 'react'
import Img1 from "../../asset/industries-img/medical/img-1.png"
import Img2 from "../../asset/industries-img/medical/img-2.png"
import Img3 from "../../asset/industries-img/medical/img-3.png"
import Img4 from "../../asset/industries-img/medical/img-4.png"
import Img5 from "../../asset/industries-img/medical/img-5.png"
import Img6 from "../../asset/industries-img/medical/img-6.png"
import Img7 from "../../asset/industries-img/medical/img-7.png"
// import Img8 from "../../../asset/main-services-page/Manufacturing/casting/img-8.png"

const Medical = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 py-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">Casting & Froging tool</div>
                    <div className=" text-base font-light pt-6">
                        Casting and forging tool manufacturing is the process of creating specialized tools used in the production of metal components by casting or forging. These tools are critical to the manufacturing process, as they are used to shape, cut, or manipulate metal components into their final form.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>Why Casting & Froging tool?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">

            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">Tested Solution, Trusted Quality</div>
                <div className='border-b-4 w-60 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6">
                    <p>ll forging tools are designed and manufactured in-house using 3D Design and Computer Aided Manufacturing. Years of experience allow us to design tools that generate better yields, thus less raw material is needed to make the part.</p>
                    <p className='mt-3'>
                        KSD cast and forge limited manufactures carbon steel and chrome vanadium hand tools & power tools
                    </p>
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center '>
                <div className='text-2xl font-bold '>
                    Available materials for froging
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full bg-black" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>CARBON STEEL</p>
                            <p className='my-3 '>
                                Carbon steel forgings may contain many alloys such as chromium, titanium, nickel, tungsten, zirconium, cobalt, and more, but the carbon content determines the hardness. Forged carbon steel parts are more economical to produce than other forging metals for applications that don’t require high operating temperatures or high strength.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>ALLOY STEEL</p>
                            <p className='my-3'>
                                Different alloys are combined with steel to impart desired qualities in forged alloy steel parts. Alloys, including chromium, manganese, molybdenum, and nickel, increase strength, toughness, and wear resistance. Forging steel with other alloying elements creates components that have high resistance to corrosion and creep as well as .

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>MICROALLOY STEEL</p>
                            <p className='my-3'>

                                Microalloyed steel gets improved mechanical qualities by adding tiny amounts of alloying components that increase the desirable properties for a specific application while decreasing production costs. Forged microalloyed steel is used extensively in automotive applications.improved strength at high temperatures.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='py-10 px-8 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> STAINLESS STEEL</p>
                            <p className='my-3'>

                                Stainless steels are iron alloys that contain a minimum of 10.5% chromium. They are known for their exceptional corrosion resistance, durability, formability, recyclability, long lifespan, and ability to withstand extreme temperatures, making it suitable for a diverse range of applications.

                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full bg-black" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>TITANIUM</p>
                            <p className='my-3'>
                                Titanium alloys are more difficult to forge than others, requiring close control of the forging temperature to achieve optimal mechanical properties. Forged titanium components are preferred for applications.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
}



export default Medical