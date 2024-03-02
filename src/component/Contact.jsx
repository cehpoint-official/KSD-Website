import React from 'react'
import Img1 from "../asset/contact-img.png"

const Contact = () => {
    return <>
        <div className='bg-black text-white px-8 py-12'>
            <div className='text-center flex-col flex items-center'>
                <div className='text-5xl font-bold  border-b-4  pb-4 '>
                    CONTACT US
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                <div className=''>
                    <div className='text-xl font-bold my-5'>CALL</div>
                    <div>+8989898989</div>
                    <div>+9183590239</div>
                    <div className='text-xl font-bold my-5'>Mail</div>
                    <div>info@gmail.com</div>
                    <div>john@gmail.com</div>
                    <div className='text-xl font-bold my-5'>Location</div>
                    <div>16/A, Romadan House City Tower</div>
                    <div>New York, United States</div>

                    <img src={Img1} alt="" className='mt-10' />

                </div>


                {/* Right column */}
                <div className='bg-black text-white'>
                    <div className=''>
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                            <div>
                                <p>Name</p>
                                <input
                                    type='text'
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
                                <label htmlFor='email' className='block mb-1'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>

                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Subject
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 border border-gray-700 rounded'
                                />
                            </div>
                            <div>
                                <label htmlFor='subject' className='block mb-1'>
                                    Message
                                </label>
                                <textarea name="" id="" className='w-full rounded' rows="5"></textarea>
                            </div>
                        </div>

                        <button className=' bg-pink-500 text-white px-4 py-2 rounded mt-4 md:mt-6'>
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Contact