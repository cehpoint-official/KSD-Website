import React from 'react'
import FooterImg from "../asset/nav-logo.png"


const Footer = () => {
    return <>
        <div className=" bg-black">
            <div className='grid grid-cols-12 text-white mx-8 pt-20 pb-10 gap-8'>
                <div className='col-span-12 pb-10 md:col-span-6 lg:col-span-3 border-b md:border-b-0 lg:border-b-0'>
                    <img className='pe-4  lg:h-14 h-10' src={FooterImg} alt="" />
                    <p className='my-8'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-pink-500 hover:text-black rounded-full px-2 py-1 me-1 bi-facebook'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-pink-500 hover:text-black rounded-full px-2 py-1 m-1 bi-instagram'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-pink-500 hover:text-black rounded-full px-2 py-1 m-1 bi-google'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-pink-500 hover:text-black rounded-full px-2 py-1 m-1 bi-twitter'></i>
                </div>

                <div className='col-span-12 md:col-span-3 lg:col-span-2  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-3xl font-bold'>Links</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>Home</p>
                    <p className='text-lg my-3'>Service</p>
                    <p className='text-lg my-3'>Blog</p>
                    <p className='text-lg my-3 mb-6'>Contact Us</p>
                </div>

                <div className='col-span-12 md:col-span-3 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-3xl font-bold'>Services</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>Contact & Faq</p>
                    <p className='text-lg my-3'>Track Your Order</p>
                    <p className='text-lg my-3'>Shipping</p>
                    <p className='text-lg my-3 mb-6'>Trade Program</p>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <p className='text-3xl font-bold'>Industries</p>

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
            Copyright © 2024 – All Rights Reserved. Made by Rajput Ishwar
        </div>
    </>
}

export default Footer