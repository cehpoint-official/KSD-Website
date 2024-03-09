import React from 'react'
import Navbar from '../../component/Navbar'
import ImgBg from "../../asset/contact-bg-img.png"
import ImgMap from "../../asset/contact-map.png"
import Footer from '../../component/Footer'
const ContactUs = () => {
    return <div>
        <Navbar />
        <div className='relative '>
            <img src={ImgBg} alt="" className='h-72 w-full   object-fill' />
            <div className='absolute top-[35%]  text-white px-10'>
                <p className='md:text-4xl text-3xl'>CONTACT US</p>
                <div className='border-b-4 md:w-[13rem] w-[11rem] my-3 border-pink-500'></div>
                <p className='mt-2 md:text-2xl text-lg'>Complete this form and we will contact you shortly.</p>
            </div>
        </div>
        <div className=' lg:px-14 px-8 py-12'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8'>
                <div className=''>
                    <p className='text-pink-600 text-2xl'>LET'S TALK</p>
                    <div className='text-xl font-bold my-5'>KSD TECHNOLOGIES</div>
                    <div className='text-xl font-bold my-2 mt-8'>CALL</div>
                    <div>+8989898989</div>
                    <div>+9183590239</div>
                    <div className='text-xl font-bold my-2 mt-8'>Mail</div>
                    <div>info@gmail.com</div>
                    <div>john@gmail.com</div>
                    <div className='text-xl font-bold my-2 mt-8'>Location</div>
                    <div>16/A, Romadan House City Tower</div>
                    <div>New York, United States</div>
                </div>

                {/* Right column */}
                <div className=''>
                    <div className=''>
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                            <div>
                                <p>Full Name*</p>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-1'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <label htmlFor='phone' className='block mb-1'>
                                    Phone No.
                                </label>
                                <input
                                    type='tel'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>

                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Company
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Industry
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Services Type
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>

                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Description of your requirements*
                                </label>
                                <textarea name="" id="" className='w-full rounded' rows="5"></textarea>
                            </div>

                            <div>
                                <label htmlFor='subject' className='block  mb-1'>
                                    Add File Link Or Upload File
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <input type="file" className='text-sm' name="" id="" placeholder='' />
                            </div>
                        </div>

                        <button className=' bg-black text-white w-full px-4 py-2 rounded mt-10 md:mt-6'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img src={ImgMap} alt="" className='object-fill' />
        <Footer />
    </div>
}

export default ContactUs