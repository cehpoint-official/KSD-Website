import React, { useEffect, useState } from 'react';
import { delay, motion } from "framer-motion";
import NavbarLogo from "../asset/logo.jpg";
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


    useEffect(() => {
        document.addEventListener("click", () => {
            setIsOpen(false)
            setIsServices(false)
            setIsContactOpen(false)
            setIsIndustriesOpen(false)
            setIsCompanyOpen(false)
        })
        return () => {
            document.removeEventListener("click", () => {
                setIsOpen(false)
                setIsServices(false)
                setIsContactOpen(false)
                setIsIndustriesOpen(false)
                setIsCompanyOpen(false)
            })
        }
    }, [])

    return (
        <>
            <div className="">
                <div className=''>
                    <div className='w-full  z-10 bg-white px-10 '>
                        <div className=' pt-1 '>
                            <div className='flex items-center justify-between'>
                                <Link to="/">
                                    <img className='pe-4 lg:h-20 md:h-16 h-14 ' src={NavbarLogo} alt="" />
                                </Link>
                                <div className='text-[1.1rem] hidden lg:block space-x-3'>

                                    <Link to="/" >
                                        <button >
                                            <p
                                                className="hover:text-[#ff0000] transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4  rounded-sm font-semibold"
                                                href="#"
                                            > Home</p>
                                        </button>
                                    </Link>
                                    <button className='group '>
                                        <p
                                            className="hover:text-[#ff0000] transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4  rounded-sm font-semibold"
                                            href="#"
                                        > Services</p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute hidden text-white group-hover:block mx-8 left-0 top-[4.7rem] cursor-default  text-start'>
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

                                                        <p className='mt-5 font-bold'>
                                                            <Link to="/cadServise" className='hover:text-[#ff0000]'>3D CAD</Link>
                                                        </p>
                                                        <p className='text-sm my-4 '>
                                                            <Link to="/cad/reverseEng" className='hover:text-[#ff0000]'>Reverse  Engineering</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/qualityControl" className='hover:text-[#ff0000]'>Quality Control & 3D Inspection</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/surfaceMod" className='hover:text-[#ff0000]'>
                                                                Surface Modelling & Solid Modelling
                                                            </Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/gDandT" className='hover:text-[#ff0000]'>
                                                                Gd & T
                                                            </Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/classSurface" className='hover:text-[#ff0000]'>Class A Surfacing</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/productDesign" className='hover:text-[#ff0000]'>Product Design Service</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/drafting" className='hover:text-[#ff0000]'>2D Drafting</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/conversion" className='hover:text-[#ff0000]'>Donversion Of 2d To 3d</Link>
                                                        </p>
                                                    </div>

                                                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                                                        <p className='mt-5 font-bold'>
                                                            <Link to="/cadServise" className='hover:text-[#ff0000]'>3D CAM</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/vMCMachining" className='hover:text-[#ff0000]'>VMC MACHINING</Link>
                                                        </p>
                                                        <p className='text-sm my-4'>
                                                            <Link to="/cad/cNCMachining" className='hover:text-[#ff0000]'>CNC MACHINING</Link>
                                                        </p>
                                                    </div>

                                                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                                                        <p className='mt-5 font-bold'><Link to="/prototype" className='hover:text-[#ff0000]'>PROTOTYPE</Link></p>
                                                        <p className='text-sm my-4'><Link to="/prototype/slaPage" className='hover:text-[#ff0000]'>SLA</Link></p>
                                                        <p className='text-sm my-4'><Link to="/prototype/fdmPage" className='hover:text-[#ff0000]'>FDM</Link></p>
                                                        <p className='text-sm my-4'><Link to="/prototype/polyjet" className='hover:text-[#ff0000]'>Poly  jet</Link></p>
                                                        <p className='text-sm my-4'><Link to="/prototype/metal" className='hover:text-[#ff0000]'>Metal Printing</Link></p>
                                                        <p className='text-sm my-4'><Link to="/prototype/slsPage" className='hover:text-[#ff0000]'>SLS</Link></p>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                                                        <p className='mt-5 font-bold'><Link to="/manufacturing" className='hover:text-[#ff0000]'>MANUFACTURING</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/plastic" className='hover:text-[#ff0000]'>Plastic  Injection Mould</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/rubber" className='hover:text-[#ff0000]'>Rubber Mould</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/casting" className='hover:text-[#ff0000]'>Casting and Froging Tool</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/jig" className='hover:text-[#ff0000]'>Jig & Fixtures</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/injection" className='hover:text-[#ff0000]'>Injection Moulding</Link></p>
                                                        <p className='text-sm my-4'><Link to="/manufacturing/industrial" className='hover:text-[#ff0000]'>Industrial Fabrication</Link></p>
                                                    </div>
                                                </div>


                                            </div>
                                        </motion.div>
                                    </button>
                                    <button className='group '>
                                        <p className="hover:text-[#ff0000] transition ease-in-out delay-150  hover:scale-125  duration-200  pb-7 px-4 rounded-sm font-semibold" href="#">
                                            Industries
                                        </p>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute hidden text-white group-hover:block right-36 top-[4.7rem] cursor-default text-start '>

                                            <div className='sm:flex bg-gray-900 mx-10 gap-10 p-10 '>
                                                <div className='flex-col flex justify-center items-center'>
                                                    <img src={NavImg1} className='sm:w-44 sm:h-24' alt="" />
                                                    <img src={NavImg2} className='sm:w-44 sm:h-24' alt="" />
                                                    <img src={NavImg3} className='sm:w-44 sm:h-24' alt="" />
                                                </div>
                                                <div className='sm:me-36 me-10'>
                                                    <p className='mt-5 font-bold'>
                                                        <Link to="/industry" className='hover:text-[#ff0000]'>INDUSTRIES</Link>
                                                    </p>
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/automotive">Automotive</Link>
                                                    </p>
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/consumer">Consumer Goods</Link>
                                                    </p>
                                                    {/* <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/house" >House Hold</Link>
                                                    </p> */}
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/toys" >Toys</Link>
                                                    </p>
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/defence" >Defence</Link>
                                                    </p>
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/transportation" >Transportation</Link>
                                                    </p>
                                                    <p className='text-sm my-4 hover:text-[#ff0000]'>
                                                        <Link to="/industry/medical">Medical Technology</Link>
                                                    </p>

                                                </div>
                                                {/* <div className='me-5'>
                                                    <p className='text-sm my-4 mt-16 hover:text-[#ff0000]'>
                                                       
                                                    </p>
                                                    <p className='text-sm my-4'>Sheet Metal Forming</p>
                                                    <p className='text-sm my-4'>Casting Foundry</p>
                                                    <p className='text-sm my-4'>Injection Moulding</p>
                                                    <p className='text-sm my-4'>Tool & Die Manufacturer</p>
                                                </div> */}

                                            </div>
                                        </motion.div>

                                    </button>

                                    <motion.button className='group '>
                                        <p
                                            className="hover:text-[#ff0000] transition ease-in-out delay-10 hover:scale-125 duration-200 pb-7 px-4 rounded-sm font-semibold"
                                        >
                                            Company
                                        </p>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className='z-10 absolute text-white  hidden group-hover:block right-16 top-[4.7rem] cursor-default'
                                        >
                                            <div className='flex bg-gray-900 gap-10 p-10'>
                                                <div>
                                                    <img src={NavComImg1} className='w-44 h-24 ms-auto' alt="" />
                                                    <img src={NavComImg2} className='w-44 h-24 ms-auto' alt="" />
                                                    <img src={NavComImg3} className='w-44 h-24 ms-auto' alt="" />
                                                </div>
                                                <div className='sm:me-36 me-10 text-start'>
                                                    <p className='mt-5 font-bold'>COMPANY</p>
                                                    <p className='text-sm my-4'>
                                                        <Link to="/company/aboutUs" className='hover:text-[#ff0000]'>About Us</Link>
                                                    </p>
                                                    {/* <p className='text-sm my-4'>FAQs</p> */}
                                                    <p className='text-sm my-4'>
                                                        <Link to="/company/blog" className='hover:text-[#ff0000]'>Blogs</Link>
                                                    </p>
                                                    {/* <p className='text-sm my-4'>Request a Quote</p> */}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.button>
                                    <motion.button className='group'>
                                        <p
                                            className="hover:text-[#ff0000] transition ease-in-out delay-10 hover:scale-125 duration-200 pb-7 px-4 rounded-sm font-semibold"
                                        >
                                            <Link to="/cousers/ksd">
                                                Courses
                                            </Link>

                                        </p>
                                    </motion.button>
                                    <motion.button className='group'>
                                        <p
                                            className="hover:text-[#ff0000] transition ease-in-out delay-10 hover:scale-125 duration-200 pb-7 px-4 rounded-sm font-semibold"
                                        >
                                            <Link to="/payNow">
                                                Pay Now
                                            </Link>
                                        </p>
                                    </motion.button>
                                    <Link to="/contactUs" >
                                        <button className='bg-[#b11f1f] hover:bg-[#fa3b3b] focus:ring-2 focus:ring-red-300 text-white font-semibold rounded-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                                            Contact
                                        </button>
                                    </Link>
                                </div>
                                <div className='lg:hidden block text-center'>
                                    <button

                                        onClick={e => {
                                            e.stopPropagation()
                                            setIsContactOpen(!isContactOpen);
                                            setIsServices(false);
                                            setIsCompanyOpen(false);
                                            setIsIndustriesOpen(false);
                                        }} className=' hover:text-[#ff0000] focus:text-gray-50 focus:outline-none font-medium rounded-lg text-3xl'>
                                        <i class={!isContactOpen ? " bi  bi-list " : " bi-x-lg hover:text-[#ff0000]"}></i>
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

            {/* small navbar */}


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isServices ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`z-10 ${isServices ? '' : 'hidden'}  shadow-lg absolute text-white w-full mt-5 text-center md:text-start `}>
                <div
                    onClick={e => {
                        e.stopPropagation()

                        setIsServices(false)
                    }}
                    onMouseLeave={e => setIsServices(false)} className='grid grid-cols-12  bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <div className='md:flex-col flex md:block justify-center items-center'>

                            <img src={Img1} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img2} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img3} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                            <img src={Img4} className=' lg:w-56 md:h-24 md:w-52 sm:w-[28%] sm:h-[35%] w-[30%] h-[30%]  ' alt="" />
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'>
                            <Link to="/cadServise" className='hover:text-[#ff0000]'>3D CAD</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/reverseEng" className='hover:text-[#ff0000]'>Reverse  Engineering</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/qualityControl" className='hover:text-[#ff0000]'>Quality control & 3D Inspection</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/surfaceMod" className='hover:text-[#ff0000]'>
                                Surface Modelling & Solid Modelling
                            </Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/gDandT" className='hover:text-[#ff0000]'>
                                Gd & T
                            </Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/classSurface" className='hover:text-[#ff0000]'>Class a surfacing</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/productDesign" className='hover:text-[#ff0000]'>Product design service</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/drafting" className='hover:text-[#ff0000]'>2D drafting</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/conversion" className='hover:text-[#ff0000]'>Conversion Of 2d To 3d</Link>
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='mt-5 font-bold'>
                            <Link to="/cadServise" className='hover:text-[#ff0000]'>3D CAM</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/vMCMachining" className='hover:text-[#ff0000]'>VMC MACHINING</Link>
                        </p>
                        <p className='text-sm my-4'>
                            <Link to="/cad/" className='hover:text-[#ff0000]'>CNC MACHINING</Link>
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='mt-5 font-bold'><Link to="/prototype" className='hover:text-[#ff0000]'>PROTOTYPE</Link></p>
                        <p className='text-sm my-4'><Link to="/prototype/slaPage" className='hover:text-[#ff0000]'>SLA</Link></p>
                        <p className='text-sm my-4'><Link to="/prototype/fdmPage" className='hover:text-[#ff0000]'>FDM</Link></p>
                        <p className='text-sm my-4'><Link to="/prototype/polyjet" className='hover:text-[#ff0000]'>Poly  Jet</Link></p>
                        <p className='text-sm my-4'><Link to="/prototype/metal" className='hover:text-[#ff0000]'>Metal Printing</Link></p>
                        <p className='text-sm my-4'><Link to="/prototype/slsPage" className='hover:text-[#ff0000]'>SLS</Link></p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold'><Link to="/manufacturing" className='hover:text-[#ff0000]'>MANUFACTURING</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/plastic" className='hover:text-[#ff0000]'>Plastic  Injection Mould</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/rubber" className='hover:text-[#ff0000]'>Rubber Mould</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/casting" className='hover:text-[#ff0000]'>Casting and Froging Tool</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/jig" className='hover:text-[#ff0000]'>Jig & Fixtures</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/injection" className='hover:text-[#ff0000]'>Injection Moulding</Link></p>
                        <p className='text-sm my-4'><Link to="/manufacturing/industrial" className='hover:text-[#ff0000]'>Industrial Fabrication</Link></p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isIndustriesOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`z-10 ${isIndustriesOpen ? '' : 'hidden'} shadow-lg absolute text-white w-full mt-5 text-center md:text-start`}>

                <div
                    onClick={e => setIsIndustriesOpen(false)}
                    onMouseLeave={e => setIsIndustriesOpen(false)} className='grid grid-cols-12 bg-gray-900 p-10 lg:p-0 mx-10 gap-5'>
                    <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <div className='md:flex-col flex md:block justify-center items-center'>
                            <img src={NavImg1} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavImg2} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />
                            <img src={NavImg3} className='sm:w-44 sm:h-24 w-[30%] h-[30%]' alt="" />

                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3 md:col-span-4'>
                        <p className='mt-5 font-bold hover:text-[#ff0000]'>
                            <Link to="/industry" >INDUSTRIES</Link>
                        </p>
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/automotive" >Automotive</Link>
                        </p>
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/consumer" >Consumer Goods</Link>
                        </p>
                        {/* <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/house" >House Hold</Link>
                        </p> */}
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/toys" >Toys</Link>
                        </p>
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/defence" >Defence</Link>
                        </p>
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/transportation" >Transportation</Link>
                        </p>
                        <p className='text-sm my-4 hover:text-[#ff0000]'>
                            <Link to="/industry/medical">Medical Technology</Link>
                        </p>
                    </div>
                    {/* <div className='col-span-12 lg:col-span-2 md:col-span-4'>
                        <p className='text-sm my-4 mt-10 hover:text-[#ff0000]'>

                        </p>
                        <p className='text-sm my-4'>Sheet Metal Forming</p>
                        <p className='text-sm my-4'>Casting Foundry</p>
                        <p className='text-sm my-4'>Injection Moulding</p>
                        <p className='text-sm my-4'>Tool & Die Manufacturer</p>
                    </div> */}

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
                        {/* <p className='text-sm my-4'>FAQs</p> */}
                        <p className='text-sm my-4'>Blogs</p>
                        {/* <p className='text-sm my-4'>Request a Quote</p> */}
                    </div>
                </div>
            </motion.div>

            <div className={`z-10 ${isContactOpen ? '' : 'hidden'}  w-full text-white  absolute lg:hidden `}>
                <div onMouseLeave={e => setIsContactOpen(false)} className='flex-col flex w-72   ms-auto me-11 rounded-xl bg-gray-900 py-5'>
                    <button className='text-xl font-semibold'>
                        <Link to="/">Home</Link>
                    </button>
                    <button onClick={e => {
                        e.stopPropagation()
                        setIsContactOpen(false);
                        setIsServices(!isServices);
                    }} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500'>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Services</a>
                    </button>
                    <button onClick={e => {
                        e.stopPropagation()
                        setIsContactOpen(false);
                        setIsCompanyOpen(!isCompanyOpen);
                    }} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500 '>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Campany</a>
                    </button>
                    <button onClick={e => {
                        e.stopPropagation()
                        setIsContactOpen(false);
                        setIsIndustriesOpen(!isIndustriesOpen);
                    }} className='group hover:bg-slate-800 py-2 focus:border-2 focus:border-pink-500 '>
                        <a className='text-xl font-semibold group-hover:text-pink-600'>Industries</a>
                    </button>
                </div>
            </div>



        </>
    );
};

export default Navbar;
