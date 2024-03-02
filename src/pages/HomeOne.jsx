import React from 'react'
import Img from "../asset/Group.png"
import Navbar from '../component/Navbar'
import Services from '../component/Services'
import Industries from '../component/Industries'
import Manufacture from '../component/Manufacture '
import Work from '../component/Work'
import Custemer from '../component/Custemer'
import QuePage from '../component/QuePage'
import Footer from '../component/Footer'
import Blog from '../component/Blog'
import Contact from '../component/Contact'

const HomeOne = () => {
    return <>
        <Navbar />

        <div className='bg-black text-white md:py-0 py-16 px-10 text-center md:h-screen flex flex-col items-center justify-center'>
            <div className='font-semibold text-4xl mx-auto'>A new approach to work</div>
            <div className='text-gray-400 text-base font-light mt-6 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Temporibus amet nulla quia illum animi molestias est quos quod architecto debitis?
            </div>
            <div className='mt-14 flex flex-col items-center md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-3'>
                <button className='border-pink-500 border px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                    Contact us
                </button>
                <button className='bg-pink-600 text-white px-10 py-2 rounded-lg'>Get a Quote</button>
            </div>
        </div>

        <div className=" mx-auto grid grid-cols-12  gap-4 px-4 my-10">

            <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                <img src={Img} alt="" className=" w-full  object-cover bg-white" />
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 lg:mt-8">
                <div className="text-2xl font-bold">WHO WE ARE</div>
                <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div>
                <div className="text-gray-700 text-base font-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus et iure debitis porro dolorem corporis laborum quaerat at magnam aut minus eius, officia nihil exercitationem quod obcaecati voluptatum dolores numquam facere? Voluptate necessitatibus nulla sint numquam, maxime veniam distinctio, eius cupiditate quo eos, quia consectetur laudantium tempore! Quo tenetur ipsa quae architecto, soluta omnis iusto odio sit sequi voluptatibus veritatis minima quas at pariatur nemo aliquid dolorum harum eos hic facere, distinctio nulla ullam voluptates? Mollitia beatae doloremque ex, cupiditate provident facere pariatur distinctio, quod consectetur nulla cumque enim.
                </div>
            </div>

        </div>

        <Services />
        <Industries />
        <Manufacture />
        <Work />
        <Blog />
        <Custemer />
        <Contact />
        <QuePage />
        <Footer />
    </>
}

export default HomeOne