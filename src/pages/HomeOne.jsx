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
import BgVdo from "../asset/videoplayback.webm"


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