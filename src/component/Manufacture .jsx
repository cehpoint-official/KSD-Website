import React from 'react';
import Img1 from "../asset/manu-img.png"
const Manufacture = () => {
    return (
        <div className='bg-gray-900  text-white py-16'>
            <div className="grid grid-cols-12 gap-4 mx-8">
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
                    {/* <div className="grid grid-cols-12 gap-4">
                        <div className='col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6'>
                            <img className='w-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlUxL_gLIg6Av1Jg6bpGDlz63FvXJsLP1imD5ZXAYlKRVabJT" alt="" />
                        </div>
                        <div className='col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6'>
                            <img className='w-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlUxL_gLIg6Av1Jg6bpGDlz63FvXJsLP1imD5ZXAYlKRVabJT" alt="" />
                        </div>
                        <div className='col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6'>
                            <img className='w-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlUxL_gLIg6Av1Jg6bpGDlz63FvXJsLP1imD5ZXAYlKRVabJT" alt="" />
                        </div>
                        <div className='col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6'>
                            <img className='w-full object-cover' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlUxL_gLIg6Av1Jg6bpGDlz63FvXJsLP1imD5ZXAYlKRVabJT" alt="" />
                        </div>
                    </div> */}


                    <img src={Img1} className='w-full object-cover' alt="" />


                </div>


            </div>
        </div>
    );
};

export default Manufacture;