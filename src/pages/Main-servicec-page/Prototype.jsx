import React from 'react'
import Img1 from "../../asset/main-services-page/Prototype/img-1.png"
import Img2 from "../../asset/Website-Picture-gallery/11.jpeg"
import Img3 from "../../asset/Website-Picture-gallery/13.png"
import Img4 from "../../asset/Website-Picture-gallery/polyjet.jpg"
import Img5 from "../../asset/Website-Picture-gallery/metal.jpg"
import Img6 from "../../asset/Website-Picture-gallery/10.webp"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const Prototype = () => {
    return <div>
        {/* <Navbar /> */}
        <div className='bg-black text-white py-10 px-8 '>
            <div className=" grid grid-cols-12  gap-4 ">

                <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
                    <img src={Img1} alt="" className=" object-fill " />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 ">
                    <div className="text-4xl font-bold lg:mt-10">3D Printing & Prototype</div>

                    <div className=" text-base font-light pt-6">
                        3D printing is a process in which a digital model is turned into a tangible, solid, three-dimensional object, usually by laying down many successive, thin layers of a material. 3D printing has become popular so quickly because it makes manufacturing accessible to more people than ever before.
                    </div>
                    <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
                        Get a Quote
                    </button>
                </div>

            </div>

            <div className='text-center flex-col flex items-center mt-10'>
                <div className='text-2xl font-bold'>
                    Our 3D Printing Services
                </div>
                <div className='md:pb-10 lg:pb-12 text-lg md:w-[60%] lg:w-[50%] text-gray-300 py-8'>
                    <p>
                        KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-6 mt-8">
                <div

                    class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img2} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>SLA</p>
                            <p className='my-3'>
                                Stereolithography (SLA) 3D printing is the most common resin 3D printing process that has become vastly popular for its ability to produce high-accuracy, isotropic, and watertight prototypes and end-use parts in a range of advanced materials with fine features and smooth surface finish.
                            </p>
                            <Link to="/prototype/slaPage" className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                SLA
                            </Link>
                            <div className='border-b-2 border-gray-600  mt-1 w-8'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img3} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>FDM</p>
                            <p className='lg:my-6 my-3'>
                                The technique is well-suited for basic proof-of-concept models, as well as quick and low-cost prototyping of simple parts, such as parts that might typically be machined. FDM parts tend to have visible layer lines and might show inaccuracies around complex features.
                            </p>
                            <Link to="/prototype/fdmPage" className='font-semibold hover:text-pink-700 text-lg text-gray-600 '>
                                FDM
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-10'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img4} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Poly Jet</p>
                            <p className='lg:my-6 my-3'>
                                PolyJet 3D Printing is an advanced technology that quickly creates precise parts using photopolymers, UV light, and inkjet heads. It achieves accuracy by layering resins to form digital materials. The process starts with a CAD model transformed into a printable format.
                            </p>
                            <Link to="/prototype/polyjet" className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                Poly Jet
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-16'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className='py-10 px-8 '>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img5} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>Metal Printing</p>
                            <p className='my-3'>
                                Direct metal printing (DMP), also commonly known as direct metal laser sintering (DMLS), is an additive manufacturing technology that builds high quality complex metal parts from 3D CAD data.
                            </p>

                            <Link to="/prototype/metal" className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                Metal Printing
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-28'></div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
                    <img src={Img6} alt="" className="w-full h-[18rem] object-fill" />
                    <div class='text-start '>
                        <div className='border-slate-500 bg-white  text-black p-5'>
                            <p className='font-semibold text-xl'>SLS</p>
                            <p className='my-3'>
                                Selective laser sintering (SLS) is a 3d printing process (additive manufacturing) that uses high-powered lasers to sinter, or bind, finely powdered material together into a solid structure
                            </p>
                            <Link to="/prototype/slsPage" className='font-semibold hover:text-pink-700 text-lg text-gray-600'>
                                SLS
                            </Link>
                            <div className='border-b-2 border-gray-600 mt-1 w-8'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
}

export default Prototype