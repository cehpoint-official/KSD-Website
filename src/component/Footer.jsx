import React, { useEffect } from 'react'
import Logo from "../asset/nav-logo.png"
import FacebookIcon from "../asset/facebook-icon.png"
import LinkedinIcon from "../asset/linkedin-icon.png"
import WhatsappIcon from "../asset/whatsapp-icon.png"
import Aos from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return <>
        <div
            // data-aos="fade-up"
            // data-aos-duration="1500"
            className=" bg-black ">
            <div className='grid grid-cols-12 text-white mx-12 pt-20 pb-10 gap-8'>
                <div className='col-span-12  pb-10 md:col-span-3 lg:col-span-4 border-b md:border-b-0 '>
                    <img src={Logo} alt="" className='mb-7' />
                    <p className=' text-xl font-semibold'>Connect with us</p>
                    {/* <img className='pe-4  lg:h-14 h-10' src={FooterImg} alt="" /> */}
                    <div className='flex gap-3 mt-4'>
                        <img className='h-10 cursor-pointer' src={WhatsappIcon} alt="" />
                        <img className='h-10 cursor-pointer' src={LinkedinIcon} alt="" />
                        <img className='h-10 cursor-pointer' src={FacebookIcon} alt="" />
                    </div>
                    <p className='text-lg mt-5'><i class="bi bi-envelope-at-fill"></i> contact@ksdtech.com</p>

                </div>

                <div className='col-span-12  md:col-span-3 lg:col-span-2  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-2xl font-semibold'>Links</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>Home</p>
                    <p className='text-lg my-3 '>Contact Us</p>
                    <p className='text-lg my-3'>FAQ</p>
                </div>

                <div className='col-span-12  md:col-span-3 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-2xl font-semibold'>Services</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>3D CAD/ CAM</p>
                    <p className='text-lg my-3'>Prototype</p>
                    <p className='text-lg my-3'>Manufacturing</p>
                    <p className='text-lg my-3'>CAM</p>
                    <p className='text-lg my-3 mb-6'>Class a surfacing</p>
                </div>
                <div className='col-span-12  md:col-span-3 lg:col-span-3 '>
                    <p className='text-2xl font-semibold'>Industries</p>

                    <p className='my-1 text-lg mt-6 lg:mt-10'>Automotive</p>
                    <p className='my-1 text-lg'>Consumer Goods</p>
                    <p className='my-1 text-lg'>House Hold</p>
                    <p className='my-1 text-lg'>Toys</p>
                    <p className='my-1 text-lg'>Defense</p>
                    <p className='my-1 text-lg'>Transportation</p>
                    <p className='my-1 text-lg'>Medical Technology</p>
                    <p className='my-1 text-lg'>Sheet Metal Forming</p>
                    <p className='my-1 text-lg'>Casting Foundry</p>
                    <p className='my-1 text-lg'>Injection Moulding</p>
                    <p className='my-1 text-lg'>Tool & die Manufacturer</p>



                </div>
            </div>
        </div>
        <div className='text-center bg-black text-gray-500 border-t text-lg  p-5'>
            Copyright @2024 by UX/UI Team
        </div>
    </>
}

export default Footer