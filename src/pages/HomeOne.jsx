import React from 'react'

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


const HomeOne = () => {
    return <div>
        {/* <Navbar /> */}
        <Home />
        <Services />
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