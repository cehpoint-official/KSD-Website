import React from 'react'
import Img1 from '../asset/customer-img.png'

const Custemer = () => {
    return <div className='mt-16'>
        <div className='text-center flex-col flex items-center'>
            <p className='text-gray-600 text-xl font-semibold my-6'><i>Testimonials  ---</i></p>
            <div className='text-5xl font-bold  border-b-4  pb-6'>
                What Our Customer Says
            </div>
        </div>
        <div class='grid grid-cols-12 gap-8 m-10 '>

            <div class='col-span-12 md:col-span-5 lg:col-span-5'>
                <img src={Img1} alt="" className="w-full " />

            </div>
            <div class='col-span-12 md:col-span-7 lg:col-span-7'>

                <div class='text-start'>
                    <div className='border-slate-500  p-5 relative '>

                        <p className='text-gray-500 font-bold'>
                            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
                        </p>
                        <p className='text-gray-500 font-bold'>
                            <i>Corporis obcaecati facereLorem ipsum dolor sit amet</i>
                        </p>
                        <p className='text-gray-500 font-bold'>
                            <i>consectetur adipisicing elit. Corporis obcaecati facere</i>

                        </p>
                        <div className='flex gap-2 my-4'>
                            <i className='bi bi-star-fill text-yellow-600'></i>
                            <i className='bi bi-star-fill text-yellow-600'></i>
                            <i className='bi bi-star-fill text-yellow-600'></i>
                            <i className='bi bi-star-fill text-yellow-600'></i>
                            <i className='bi bi-star-fill text-yellow-600'></i>
                        </div>
                        <div className='lg:mt-40 md:mt-24 mt-10'>

                            <p className='font-bold text-xl'>Anya Mondal</p>
                            <p className='text-sm text-gray-700'>Chief Accountant</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
}

export default Custemer