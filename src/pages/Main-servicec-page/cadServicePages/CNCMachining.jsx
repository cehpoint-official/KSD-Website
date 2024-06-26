import React from 'react'
import Img1 from "../../../asset/Website-Picture-gallery/12.png"
import Img2 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-7.png"
import Img8 from "../../../asset/main-services-page/cmd-service/CNCMachine/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const CNCMachining = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-10 '>
            <div className=" grid grid-cols-12  gap-4 pb-16">
                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill w-full" />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold">CNC Machining</div>
                    <div className=" text-base font-light pt-6">
                        A CNC lathe(CNC turning machine) is a machine that spins material around a central spindle and a fixed cutting tool. Instead of being controlled by physical labor, the movement of your components is determined by coded instructions fed to a computer.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>


            <div className='text-center flex-col flex items-center mt-28'>
                <div className='text-2xl font-bold '>
                    Why CNC Machining?
                </div>
                <div className='bg-pink-600 w-48 mt-3 h-[3px] rounded-xl'></div>
            </div>

            <div className='grid grid-cols-12 gap-6 md:m-10  my-10'>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>High Precision and Improved Accuracy</p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Endurance
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            High Production and Scalability
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>

                            Enhanced Capabilities
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Capable of producing even the most complex parts
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
                    <div className='flex gap-3 items-center'>
                        <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
                        <p className='text-xl text-gray-400'>
                            Wide Range of Materials Supported
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div className=" grid grid-cols-12 bg-black  text-black">


            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10 ps-14">
                <div className="md:text-4xl text-3xl font-bold ">We offer</div>
                <div className='border-b-4 w-28 mt-3 rounded-xl border-pink-600'></div>

                <div className=" pt-6">
                    <p>
                        CNC is a technology which is used for motion control of machines which can be lathe, milling, grinding, EDM, any type of machine. VMC is a specific type of milling machine which is CNC controlled. VMC means Vertical Milling Centre. In this type of milling machine, the cutting head is vertical, normal to the work table
                    </p>
                    <p>
                        CNC is technology for machines and VMC is name of particular type machine. CNC technology encompasses the broader concept of computer control in machining, while VMC technology refers to a specific type of CNC machine with a vertical spindle orientation
                    </p>

                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 bg-black">
                <img src={Img2} alt="" className=" object-cover w-full h-[30rem]" />
            </div>
        </div>
        <div className='bg-black text-white p-10 pt-24  '>

            <div className='text-center flex-col flex items-center my-10'>
                <div className='text-2xl font-bold '>
                    Industries Utilising CNC
                </div>
                <div className='bg-pink-600 w-48 rounded-xl mt-3 h-[3px]'></div>

            </div>

            <div class="grid grid-cols-12 gap-6 mt-20">
                <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full " />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl '> Aerospace</p>
                            <p className='my-3'>
                                The accuracy needed to manufacture every component of an airplane is increased by CNC. This includes everything from the outer . The highest levels of precision and accuracy must be used when manufacturing CNC-machined aerospace components since they are often mission-critical.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'> Medical equipment</p>
                            <p className='my-3'>
                                To meet patient needs, the medical industry primarily relies on specialized, accurate and high-quality products produced by CNC machinery. During the COVID-19 pandemic, when the need for medical products such as masks and respirators rose, this dependence on CNC machines increased.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Automotive</p>
                            <p className='my-3'>
                                One of the key markets for CNC machining is the automotive industry. Every step of the automobile manufacturing industry, from prototyping in of the automobile manufacturing  research and development to producing large quantities of parts, benefits from using CNC machining.
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
                            CNC machining is a useful manufacturing method for the electronics sector because of its accuracy and adaptability. Both conductive and nonconductive metals
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img7} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'> Oil and gas</p>
                        <p className='my-3'>
                            Large machinery used in drilling rigs and refineries is designed with CNC machines to ensure a flawless fit. An imperfect fit can cause cylinders to not fill, pistons to not exert the proper amount of pressure and valves to leak.
                        </p>

                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                <img src={Img8} alt="" className="w-full" />
                <div class='text-start '>
                    <div className='border-slate-500 bg-white  text-black p-5'>
                        <p className='font-semibold text-xl'>  Marine</p>
                        <p className='my-3'>
                            Because highly precise parts are required to keep ships running and afloat, the marine industry heavily relies on CNC machines. Watercraft require a plethora of equipment.
                        </p>

                    </div>
                </div>
            </div>
        </div>

        {/* <Footer /> */}
    </div>
}


export default CNCMachining