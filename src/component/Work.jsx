import React from 'react'
import Img1 from "../asset/achi-img1.png"
import Img2 from "../asset/achi-img2.png"
import Img3 from "../asset/achi-img3.png"
import Img4 from "../asset/achi-img3.png"

const Work = () => {
    return <>

        <div className='text-center  items-center mt-10'>


            <div className='text-center flex-col flex items-center'>
                <div className='text-5xl font-bold  border-b-4  pb-6'>
                    SEE OUR LATEST WORK
                </div>
                <div className='md:pb-10 lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique, obcaecati nobis cupiditate quia atque distinctio vero! Quos, non voluptas.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1st row */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYUMeV3nm8sJpHfPpTjl_Y5Y8J3YHQYlj1zIJjeGzn3Q0LXQwQ" alt="" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBNt0kP3kIvEqRc91WD2HVpb4d3pnhAPmAAzHllQ9L_fYzPdny" alt="" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlmvUy7X37N_Tg4uu3h5lfk25Pmn5zIstSlu4SqDQaGTm6b9bO" alt="" />
                </div>

                {/* 2nd row */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsf3TkytVqFsQj5ziIqY2ZfiPg3P4E8l15rZvaP7n7j3FvOiW1" alt="" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCOoqz7t8ncEK1hJ8qlodzQx5LKa7E5IFKVgxrCpVBn_Ow4QkQ" alt="" />
                    <div className='absolute top-[3rem] left-16 w-2/3 text-white'>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2 text-white px-4 py-1 rounded-lg'>More Details</button>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img className="w-full h-52 object-cover" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkDqr2aryM4hJrLCw3Zic_qvXTVAl_wt6Ru93J1Rw6X4QzGW0r" alt="" />
                </div>
            </div>


            <p className='text-gray-600 text-xl font-semibold my-6 mt-16'><i>ACHIEVEMENTS  ---</i></p>
            <div className='text-4xl  mb-8 text-black font-bold pb-2'>Our ACHIEVEMENTS
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:mx-24 mg:mx-16 mx-8">
            <div className="p-3 lg:col-span-3 md:col-span-4 col-span-6 bg-white rounded-md shadow-md w-full">
                <div>
                    <div className="text-lg font-bold mt-5 text-gray-800">Total Projects</div>
                    <div className="text-3xl font-bold text-blue-500">50+</div>

                    <div className='text-end w-full flex justify-end'>
                        <img
                            className="w-24 h-24"
                            src={Img1}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="p-3 lg:col-span-3 md:col-span-4 col-span-6 bg-white rounded-md shadow-md w-full">
                <div>
                    <div className="text-lg font-bold mt-5 text-gray-800">Total Products</div>
                    <div className="text-3xl font-bold text-blue-500">20+</div>

                    <div className='text-end w-full flex justify-end'>
                        <img
                            className="w-24 h-24"
                            src={Img2}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="p-3 lg:col-span-3 md:col-span-4 col-span-6 bg-white rounded-md shadow-md w-full">
                <div>
                    <div className="text-lg font-bold mt-5 text-gray-800">Satisfied Clients</div>
                    <div className="text-3xl font-bold text-blue-500">70+</div>

                    <div className='text-end w-full flex justify-end'>
                        <img
                            className="w-24 h-24"
                            src={Img3} alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="p-3 lg:col-span-3 md:col-span-4 col-span-6 bg-white rounded-md shadow-md w-full">
                <div>
                    <div className="text-lg font-bold mt-5 text-gray-800">Team Support</div>
                    <div className="text-3xl font-bold text-blue-500">30+</div>

                    <div className='text-end w-full flex justify-end'>
                        <img
                            className="w-24 h-24"
                            src={Img4} alt=""
                        />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Work