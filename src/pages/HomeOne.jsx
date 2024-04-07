import React, { useEffect, useRef, useState } from 'react'

import Navbar from '../component/Navbar'
import Services from '../component/Services'
import Industries from '../component/Industries'
import Manufacture from '../component/Manufacture '
import Work from '../component/Work'
import Custemer from '../component/Custemer'
import QuePage from '../component/QuePage'
import Footer from '../component/Footer'
import Blog from './companyPages/Blog'
import Contact from '../component/Contact'
import Home from '../component/Home'
import BgVdo from "../asset/videoplayback.mp4"


const HomeOne = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play()
                .then(() => {
                    // Autoplay started
                })
                .catch(error => {
                    // Autoplay failed
                    console.error('Autoplay failed:', error);
                });
        }
    }, []);

    return <div className=''>

        {/* <video autoPlay loop muted className='md:top-0 top-20 w-full  z-[-10] bg-white  fixed ' src={BgVdo}></video> */}

        <video ref={videoRef} autoPlay loop muted className=' w-full top-0 z-[-10] bg-white fixed'>
            <source src={BgVdo} type='video/mp4' />
            Your browser does not support the video tag.
        </video>

        {/* <Navbar /> */}
        <Home />
        {/* <Services /> */}
        <Industries />
        <Manufacture />
        <Work />
        {/* <Blog /> */}
        <Custemer />
        {/* <Contact /> */}
        <QuePage />
        {/* <Footer /> */}
    </div>
}

export default HomeOne