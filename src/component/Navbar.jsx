import React, { useEffect, useState } from 'react';
import { delay, motion } from "framer-motion";
import NavbarImg from "../asset/nav-logo.png";
import Img1 from "../asset/services-img/nav-ser-img-1.png";
import Img2 from "../asset/services-img/nav-ser-img-2.png";
import Img3 from "../asset/services-img/nav-ser-img-3.png";
import Img4 from "../asset/services-img/nav-ser-img-4.png";
import NavImg1 from "../asset/industries-img/nav-img-1.png";
import NavImg2 from "../asset/industries-img/nav-img-2.png";
import NavImg3 from "../asset/industries-img/nav-img-3.png";
import NavComImg1 from "../asset/company-img/com-img-1.png";
import NavComImg2 from "../asset/company-img/com-img-2.png";
import NavComImg3 from "../asset/company-img/com-img-3.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false);
    const [isServices, setIsServices] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsServices(false);
        setIsContactOpen(false);
        setIsIndustriesOpen(false);
        setIsCompanyOpen(false);
    };

    const toggleServicesPage = () => {
        setIsServices(!isServices);
        setIsOpen(false);
        setIsIndustriesOpen(false);
        setIsCompanyOpen(false);
        setIsContactOpen(!isContactOpen);
    };
    const toggleContactPage = () => {
        setIsContactOpen(!isContactOpen);
        setIsOpen(false);
        setIsServices(false);
        setIsIndustriesOpen(false);
        setIsCompanyOpen(false);
    };

    const toggleIndustriesPage = () => {
        setIsIndustriesOpen(!isIndustriesOpen);
        setIsOpen(false);
        setIsServices(false);
        setIsContactOpen(false);
        setIsCompanyOpen(false);
    };

    const toggleCompanyPage = () => {
        setIsCompanyOpen(!isCompanyOpen);
        setIsOpen(false);
        setIsServices(false);
        setIsContactOpen(false);
        setIsIndustriesOpen(false);
    };

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (
        <>
            <div className={` overflow-hidden`}>
                <div className=''>
                    <div className='w-full bg-black text-white px-10 '>
                        <div className=' py-2'>
                            <div className='flex items-center justify-between'>
                                <Link to="/">
                                    <img className='pe-4 lg:h-14 md:h-12 h-10' src={NavbarImg} alt="" />
                                </Link>
                                <div className='text-lg hidden lg:block space-x-4'>

                                    <Link to="/" >
                                        <button >
                                            <p
                                                className="hover:text-pink-500 transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4  rounded-sm font-semibold"
                                                href="#"
                                            > Home</p>
                                        </button>
                                    </Link>
                                    <button className='group '>
                                        <p
                                            className="hover:text-pink-500 transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4  rounded-sm font-semibold"
                                            href="#"
                                        > Services</p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute hidden group-hover:block mx-8 left-0 top-[4.7rem] cursor-default  text-start'>
                                            <div className=' bg-gray-900 gap-10 p-10'>
                                                <div className='grid grid-cols-12 bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                                                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                                                        <div className='flex-col flex md:block justify-center items-center'>

                                                            <img src={Img1} className=' lg:w-56 md:h-24  ' alt="" />
                                                            <img src={Img2} className=' lg:w-56 md:h-24  ' alt="" />
                                                            <img src={Img3} className=' lg:w-56 md:h-24  ' alt="" />
                                                            <img src={Img4} className=' lg:w-56 md:h-24  ' alt="" />
                                                        </div>
                                                    </div>
                                                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                                                        <p className='mt-5 font-bold'>3D CAD</p>
                                                        <p className='text-sm my-4'>Reverse  Engineering</p>
                                                        <p className='text-sm my-4'>Quality control & 3D Inspection</p>
                                                        <p className='text-sm my-4'>Surface Modelling & Solid Modelling</p>
                                                        <p className='text-sm my-4'>gd & T</p>
                                                        <p className='text-sm my-4'>Class a surfacing</p>
                                                        <p className='text-sm my-4'>Product design service</p>
                                                        <p className='text-sm my-4'>2D drafting</p>
                                                        <p className='text-sm my-4'>conversion of 2d to 3d</p>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                                                        <p className='mt-5 font-bold'>3D CAM</p>
                                                        <p className='text-sm my-4'>VMC MACHINING</p>
                                                        <p className='text-sm my-4'>CNC MACHINING</p>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                                                        <p className='mt-5 font-bold'>PROTOTYPE</p>
                                                        <p className='text-sm my-4'>SLA</p>
                                                        <p className='text-sm my-4'>FDM</p>
                                                        <p className='text-sm my-4'>Poly  jet</p>
                                                        <p className='text-sm my-4'>metal Printing</p>
                                                        <p className='text-sm my-4'>SLS</p>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                                                        <p className='mt-5 font-bold'>MANUFACTURING</p>
                                                        <p className='text-sm my-4'>plastic  injection mould</p>
                                                        <p className='text-sm my-4'>rubber mould</p>
                                                        <p className='text-sm my-4'>casting and froging tool</p>
                                                        <p className='text-sm my-4'>gig & fixtures</p>
                                                        <p className='text-sm my-4'>injection moulding</p>
                                                        <p className='text-sm my-4'>industrial fabrication</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </motion.div>
                                    </button>
                                    <button className='group '>
                                        <p className="hover:text-pink-500 transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4 rounded-sm font-semibold" href="#">Industries</p>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute hidden group-hover:block right-16 top-[4.7rem] cursor-default text-start '>

                                            <div className='sm:flex bg-gray-900 mx-10 gap-10 p-10'>
                                                <div className='flex-col flex justify-center items-center'>
                                                    <img src={NavImg1} className='sm:w-44 sm:h-24' alt="" />
                                                    <img src={NavImg2} className='sm:w-44 sm:h-24' alt="" />
                                                    <img src={NavImg3} className='sm:w-44 sm:h-24' alt="" />
                                                </div>
                                                <div className=''>
                                                    <p className='mt-5 font-bold'>INDUSTRIES</p>
                                                    <p className='text-sm my-4'>Automotive</p>
                                                    <p className='text-sm my-4'>Consumer Goods</p>
                                                    <p className='text-sm my-4'>House Hold</p>
                                                    <p className='text-sm my-4'>Toys</p>
                                                    <p className='text-sm my-4'>defence</p>
                                                    <p className='text-sm my-4'>Transportation</p>
                                                </div>
                                                <div className='me-5'>
                                                    <p className='text-sm my-4 mt-16'>Medical Technology</p>
                                                    <p className='text-sm my-4'>Sheet Metal Forming</p>
                                                    <p className='text-sm my-4'>Casting Foundry</p>
                                                    <p className='text-sm my-4'>Injection Moulding</p>
                                                    <p className='text-sm my-4'>Tool & Die Manufacturer</p>
                                                </div>

                                            </div>
                                        </motion.div>

                                    </button>

                                    <motion.button className='group'>
                                        <p

                                            className="hover:text-pink-500 transition ease-in-out delay-10 hover:scale-125 duration-200 pb-7 px-4 rounded-sm font-semibold"
                                        >
                                            Company
                                        </p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute  hidden group-hover:block right-16 top-[4.7rem] cursor-default'
                                        >
                                            <div className='flex bg-gray-900 gap-10 p-10'>
                                                <div>
                                                    <img src={NavComImg1} className='w-44 h-24 ms-auto' alt="" />
                                                    <img src={NavComImg2} className='w-44 h-24 ms-auto' alt="" />
                                                    <img src={NavComImg3} className='w-44 h-24 ms-auto' alt="" />
                                                </div>
                                                <div className='sm:me-36 me-10 text-start'>
                                                    <p className='mt-5 font-bold'>COMPANY</p>
                                                    <p className='text-sm my-4'>About Us</p>
                                                    <p className='text-sm my-4'>FAQs</p>
                                                    <p className='text-sm my-4'>Blogs</p>
                                                    <p className='text-sm my-4'>Request a Quote</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.button>
                                    <Link to="/contactUs" >
                                        <button className='bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 text-white font-semibold rounded-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'>
                                            Contact
                                        </button>
                                    </Link>
                                </div>
                                <div className='lg:hidden block text-center'>
                                    <button
                                        onClick={toggleContactPage} className=' hover:text-pink-500 focus:text-gray-50 focus:outline-none font-medium rounded-lg text-3xl'>
                                        <i class={!isContactOpen ? " bi  bi-list " : " bi-x-lg hover:text-pink-600"}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* <div className={`z-10 ${isOpen ? '' : 'hidden'} bg-white absolute`}>
                <p className='text-3xl'>Home Details</p>
            </div> */}


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isServices ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`z-10 ${isServices ? '' : 'hidden'}  shadow-lg absolute text-white w-full mt-5 text-center md:text-start `}>
                <div onMouseLeave={e => setIsServices(false)} className='grid grid-cols-12  bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <div className='md:flex-col flex md:block justify-center items-center'>

                            <img src={Img1} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img2} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img3} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img4} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'>3D CAD</p>
                        <p className='text-sm my-4'>Reverse  Engineering</p>
                        <p className='text-sm my-4'>Quality control & 3D Inspection</p>
                        <p className='text-sm my-4'>Surface Modelling & Solid Modelling</p>
                        <p className='text-sm my-4'>gd & T</p>
                        <p className='text-sm my-4'>Class a surfacing</p>
                        <p className='text-sm my-4'>Product design service</p>
                        <p className='text-sm my-4'>2D drafting</p>
                        <p className='text-sm my-4'>conversion of 2d to 3d</p>
                    </div>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='mt-5 font-bold'>3D CAM</p>
                        <p className='text-sm my-4'>VMC MACHINING</p>
                        <p className='text-sm my-4'>CNC MACHINING</p>
                    </div>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='mt-5 font-bold'>PROTOTYPE</p>
                        <p className='text-sm my-4'>SLA</p>
                        <p className='text-sm my-4'>FDM</p>
                        <p className='text-sm my-4'>Poly  jet</p>
                        <p className='text-sm my-4'>metal Printing</p>
                        <p className='text-sm my-4'>SLS</p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'>MANUFACTURING</p>
                        <p className='text-sm my-4'>plastic  injection mould</p>
                        <p className='text-sm my-4'>rubber mould</p>
                        <p className='text-sm my-4'>casting and froging tool</p>
                        <p className='text-sm my-4'>gig & fixtures</p>
                        <p className='text-sm my-4'>injection moulding</p>
                        <p className='text-sm my-4'>industrial fabrication</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isIndustriesOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`z-10 ${isIndustriesOpen ? '' : 'hidden'} shadow-lg absolute text-white w-full mt-5 text-center md:text-start`}>

                <div onMouseLeave={e => setIsIndustriesOpen(false)} className='grid grid-cols-12 bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <div className='md:flex-col flex md:block justify-center items-center'>
                            <img src={NavImg1} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavImg2} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavImg3} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />

                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'>INDUSTRIES</p>
                        <p className='text-sm my-4'>Automotive</p>
                        <p className='text-sm my-4'>Consumer Goods</p>
                        <p className='text-sm my-4'>House Hold</p>
                        <p className='text-sm my-4'>Toys</p>
                        <p className='text-sm my-4'>defence</p>
                        <p className='text-sm my-4'>Transportation</p>
                    </div>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='text-sm my-4 mt-16'>Medical Technology</p>
                        <p className='text-sm my-4'>Sheet Metal Forming</p>
                        <p className='text-sm my-4'>Casting Foundry</p>
                        <p className='text-sm my-4'>Injection Moulding</p>
                        <p className='text-sm my-4'>Tool & Die Manufacturer</p>
                    </div>

                </div>


            </motion.div>

            <motion.div

                className={`z-10 ${isCompanyOpen ? '' : 'hidden'} shadow-lg absolute text-white w-full mt-5 text-center md:text-start`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isCompanyOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}>
                <div onBlur={() => setIsCompanyOpen(false)} onMouseLeave={() => setIsCompanyOpen(false)} className='grid grid-cols-12 bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <div className='md:flex-col flex md:block justify-center items-center'>
                            <img src={NavComImg1} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavComImg2} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavComImg3} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'>COMPANY</p>
                        <p className='text-sm my-4'>About Us</p>
                        <p className='text-sm my-4'>FAQs</p>
                        <p className='text-sm my-4'>Blogs</p>
                        <p className='text-sm my-4'>Request a Quote</p>
                    </div>
                </div>
            </motion.div>

            <div className={`z-10 ${isContactOpen ? '' : 'hidden'}  w-full text-white  absolute lg:hidden `}>
                <div onMouseLeave={e => setIsContactOpen(false)} className='flex-col flex w-72   ms-auto me-11 rounded-xl bg-gray-900 py-5'>
                    <button onClick={toggleServicesPage} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500'>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Services</a>
                    </button>
                    <button onClick={toggleCompanyPage} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500 '>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Campany</a>
                    </button>
                    <button onClick={toggleIndustriesPage} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500 '>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Industries</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
