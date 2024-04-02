import React from 'react';
import Img1 from "../asset/manu-img-2.png"
import ImgIcon from "../asset/manu-img-2-icon.png"
const Manufacture = () => {
    return (
        <div className=' bg-slate-50  py-24 pt-32'>

            <div className='text-center flex-col flex items-center'>
                <div className='text-4xl font-semibold  border-b-2  pb-4 '>
                    Our Manufacturing Process
                </div>
            </div>
            {/* <div className='flex justify-center  lg:mx-32 mx-8 bg-red-800'>
                <img src={Img1} alt="" className=' md:h-[25rem]' />
            </div> */}

            <div className='grid grid-cols-12 mt-20 text-slate-500'>
                <div className='col-span-4 text-end '>
                    <p>Research & Analysis</p>
                    <p className='mt-[30%] lg:mt-[40%]  md:mt-[43%] sm:mt-[43%] me-5'>Ideation & Concepts</p>
                </div>
                <div className='col-span-4 text-center relative'>
                    <img src={Img1} alt="" />
                    <img src={ImgIcon} alt="" className='absolute top-[23%] left-[40%] lg:h-20 md:h-14 sm:h-10 h-8' />
                    <p className='mt-4'>Production & Development</p>
                </div>
                <div className='col-span-4 '>
                    <p>Production & Assembly</p>
                    <p className='mt-[20%]  lg:mt-[40%] md:mt-[43%] sm:mt-[43%] ms-3'>Tooling & Mould Making</p>
                </div>
            </div>


            {/* <div className="grid grid-cols-12 gap-4 mx-8">
                <div className="col-span-12 md:col-span-6">
                    <div className="">
                        <p className='text-3xl font-bold border-b-2 pb-4'>
                            OUR MANUFACTURING PROCESS
                        </p>
                    </div>

                    <div className='text-gray-400 mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in quaerat voluptatum dignissimos aspernatur quas iste aliquid impedit repellat fugit?
                    </div>
                    <div className='mt-10 '>
                        <div className='flex space-x-3 my-2'>
                            <div><i class="bi bi-book"></i></div>
                            <div>Reserach And Analysis</div>
                        </div>
                        <div className='flex space-x-3  my-2'>
                            <div><i class="bi bi-lightbulb"></i></div>
                            <div>Ideation & Concepts</div>
                        </div>
                        <div className='flex space-x-3  my-2'>
                            <div><i class="bi bi-person-gear"></i></div>
                            <div> Production & Development</div>
                        </div>
                        <div className='flex space-x-3  my-2'>
                            <div><i class="bi bi-book"></i></div>
                            <div> Tooling & Mould Making</div>
                        </div>
                        <div className='flex space-x-3  my-2 mb-10'>
                            <div><i class="bi bi-book"></i></div>
                            <div> Production & Assembly</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <img src={Img1} className='w-full object-cover' alt="" />
                </div>


            </div> */}
        </div>
    );
};

export default Manufacture;