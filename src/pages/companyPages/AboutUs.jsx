import React from 'react'
import Img2 from "../../asset/about/img-1.png"
import Img3 from "../../asset/about/img-2.png"
import Img4 from "../../asset/about/img-3.png"
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return <>
        <div className='aboutBgImg'>
            <p className='text-white lg:text-5xl  text-3xl font-bold text-center lg:py-32 py-24'>About KSD Technologies</p>
        </div>
        <div className=" grid grid-cols-12 bg-white  text-black ">

            <div className="col-span-12 bg-white md:col-span-6 lg:col-span-6 p-10">
                <div className="md:text-4xl text-3xl font-bold ">ABOUT US</div>
                <div className='border-b-4 w-44 mt-3 border-pink-600 rounded-xl'></div>

                <div className=" pt-6 text-lg">
                    With our state-of-the-art measurement technology, cutting edge design, and ISO 9100 & AS9100 Rev D certifications, our 3D scanning facilities can capture measurements from objects as small as a medical heart stent, with a diameter of only 1 millimeter, to areas as large as a football field. Our custom-tailored post processing options in Inspection and Reverse Engineering allow you to have limitless 3D digital data at your fingertips.
                </div>
                <p className='text-3xl font-bold mt-8'>
                    We carry 3D measurement hardware and software systems from the metrology industry’s leading manufacturers.our industries include
                </p>

                <div className='md:hidden block lg:block'>
                    <div className='grid grid-cols-12 text-lg  mt-8 gap-4 '>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4'>
                            <p>Automotive Industry</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Medical Technology</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Injection Moulding</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Sheet Metal Forming</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                        </div>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4'>
                            <p>Consumer Goods</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Casting Foundary</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Defence</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Tool & Die Manufacturering</p>
                            <div className='border-b-2 w-32 mb-3 mt-1'></div>
                        </div>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4 '>
                            <p>House Hold</p>
                            <div className='border-b-2 w-24 mb-3 mt-1'></div>
                            <p>Transportation</p>
                            <div className='border-b-2 w-28 mb-3 mt-1'></div>
                            <p>Toys</p>
                            <div className='border-b-2 w-9 mb-3 mt-1'></div>
                        </div>


                    </div>
                </div>

            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-6 ">
                <img src={Img2} alt="" className="md:mt-14 object-cover" />
                <div className='hidden md:block lg:hidden'>
                    <div className='grid grid-cols-12 text-lg  mt-8 gap-4 '>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4'>
                            <p>Automotive Industry</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Medical Technology</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Injection Moulding</p>
                            <div className='border-b-2 lg:w-[80%] w-[60%] mb-3 mt-1'></div>
                            <p>Sheet Metal Forming</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                        </div>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4'>
                            <p>Consumer Goods</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Casting Foundary</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Defence</p>
                            <div className='border-b-2 lg:w-[80%] w-[65%] mb-3 mt-1'></div>
                            <p>Tool & Die Manufacturering</p>
                            <div className='border-b-2 w-32 mb-3 mt-1'></div>
                        </div>
                        <div className='col-span-6 md:col-span-6 lg:col-span-4 md:-mt-4 -mt-10'>
                            <p>House Hold</p>
                            <div className='border-b-2 w-24 mb-3 mt-1'></div>
                            <p>Transportation</p>
                            <div className='border-b-2 w-28 mb-3 mt-1'></div>
                            <p>Toys</p>
                            <div className='border-b-2 w-9 mb-3 mt-1'></div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

        <div className='grid grid-cols-12 md:p-10 p-5 bg-black text-white gap-2' >
            <div className='col-span-12 md:col-span-6 p-6'>
                <img src={Img3} alt="" />
                <div className='my-4'>
                    <p className='lg:text-[2.5rem] md:mt-8 mt-4  font-semibold text-3xl borde '>WE CARE FOR OUR CLIENTS</p>
                    <p className='md:mt-6 mt-4 text-xl'>
                        We’ve worked with hobbyists, artists and even Fortune 500 companies. We treat every single project, big or small, with the same level of enthusiasm and care.
                    </p>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 p-6'>
                <div className='mb-8'>
                    <p className='lg:text-[2.5rem] font-semibold text-3xl borde '>WE LOVE WHAT WE DO</p>
                    <p className='md:mt-6 mt-4 text-xl'>
                        We started KSD technologies because of our love for making projects come to life . Each day, we get clients with projects that keep us on our feet. We enjoy the challenge and the opportunity to create different things every day.With our state-of-the-art measurement technology, cutting edge design, and ISO 9100 & AS9100 Rev D certifications, our 3D scanning facilities can capture measurements from objects as small as a medical heart stent, with a diameter of only 1 millimeter,
                    </p>
                </div>
                <img src={Img4} alt="" />

            </div>

        </div>

        <div className='aboutBgImgTwo text-center text-white lg:py-28 py-20 bg-black'>
            <p className='md:text-5xl font-bold text-3xl'> Explore Our Services</p>
            <p className='mt-4 text-3xl'>Get wonderful experience with KSD Technologies</p>
            <div className='space-x-8 mt-5 text-xl text-blue-500'>
                <Link to="/cadServise">3D CAD/CAM Services</Link>
                <Link to="/prototype">Prototype</Link>
                <Link to="/manufacturing">Manufacturing</Link>
            </div>
            <div className='mt-24 space-x-4'>
                <Link to="/contactUs">
                    <button
                        className='bg-[#b11f1f] hover:bg-[#fa3b3b]  text-white  text-2xl px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Contact us
                    </button>
                </Link>
                <Link to="/company/quote">
                    <button className='bg-[#b11f1f] hover:bg-[#fa3b3b] text-white px-10 py-2 text-2xl rounded-lg'>Get a Quote</button>
                </Link>
            </div>
        </div>

    </>
}

export default AboutUs