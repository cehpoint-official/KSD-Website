import React from 'react'

const Industries = () => {
    return <>
        <div className='text-center items-center  mt-10'>
            <div className='text-center flex-col flex items-center'>
                <div className='text-5xl font-bold  border-b-4  pb-4 '>
                    Industries</div>
            </div>

            <div className=' flex justify-center'>

                <div className='md:pb-10  lg:pb-12 mx-6 text-xl md:w-[60%] lg:w-[50%] text-gray-500 py-5'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique, obcaecati nobis cupiditate quia atque distinctio vero! Quos, non voluptas.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1st row */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjsKg3YdS9DXDRh7iC7YcKEmzZD79pHDEvCKzQo87Lyuo47Ach" alt="" className="w-full h-52 object-cover" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1 relative">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44wf92OTUSqbPCGgGQTDrsyfqyuMeUEycAp1z-23nBm0xAwyY" alt="" className="w-full h-52 object-cover" />
                    <div className='absolute top-[3rem] left-16 w-2/3 text-white '>
                        <p className='font-bold'>INDUSTRY 1</p>
                        <p className='my-3'>Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue</p>
                        <button className='text-sm border-2  text-white px-4 py-1 rounded-lg'>More Details</button>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReHGvqayuTpHw6W_E0u3N4QGlbu6DpQBZhMhTgQQGscla4VVyH" alt="" className="w-full h-52 object-cover" />
                </div>

                {/* 2nd row */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsf3TkytVqFsQj5ziIqY2ZfiPg3P4E8l15rZvaP7n7j3FvOiW1" alt="" className="w-full h-52 object-cover" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxZEpTHvAkHjWOus0FWL2XJ5trQY6GVDt3eM0iWUW7piJlqazf" alt="" className="w-full h-52 object-cover" />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJWKI8IXPbDDZo05hgVyl5HgJzDTaMCzUxj3SdWYX7FadK7xf2" alt="" className="w-full h-52 object-cover" />
                </div>
            </div>
        </div>
    </>
}

export default Industries