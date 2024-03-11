import React from 'react'
import Img1 from "../../asset/main-services-page/cmd-service/img-1.png"
import Img2 from "../../asset/main-services-page/cmd-service/img-2.png"
import Img3 from "../../asset/main-services-page/cmd-service/img-3.png"
import Img4 from "../../asset/main-services-page/cmd-service/img-4.png"
import Img5 from "../../asset/main-services-page/cmd-service/img-5.png"
import Img6 from "../../asset/main-services-page/cmd-service/img-6.png"
import Img7 from "../../asset/main-services-page/cmd-service/img-7.png"
import Img8 from "../../asset/main-services-page/cmd-service/img-8.png"
import Img9 from "../../asset/main-services-page/cmd-service/img-9.png"
import Img10 from "../../asset/main-services-page/cmd-service/img-10.png"
import Img11 from "../../asset/main-services-page/cmd-service/img-11.png"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const CadServices = () => {
  return <div>
    <Navbar />
    <div className='bg-black text-white py-10 px-8 '>
      <div className=" grid grid-cols-12  gap-4 ">

        <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
          <img src={Img1} alt="" className=" lg:w-[90%]   object-cover " />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 lg:mt-16">
          <div className="text-4xl font-bold">3D CAD/CAM Services</div>
          {/* <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div> */}
          <div className=" text-base font-light pt-6">
            CAD (Computer-Aided Design) and CAM (Computer-Aided Manufacturing) services play crucial roles in the product development and manufacturingprocesses. These services involve the use of specialized software to design and manufacture products in a more efficient and accurate manner. These services involve the use of specialized software to design and manufacture products in a more efficient and accurate manner.
          </div>
          <button className='hover:border-pink-700 focus:border-pink-300 border-pink-500 border-2 hover:text-pink-300 text-pink-500 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
            Get a Quote
          </button>
        </div>

      </div>


      <div className='text-center flex-col flex items-center mt-10'>
        <div className='text-2xl font-bold'>
          OUR CAD SERVICES
        </div>
        <div className='md:pb-10 lg:pb-12 text-lg md:w-[60%] lg:w-[50%] text-gray-300 py-5'>
          <p>
            KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move.
          </p>
        </div>
      </div>
    </div>

    <div className='text-white py-10 px-8 md:mx-8 mx-4 '>


      <div class='grid grid-cols-12 gap-8  '>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img2} alt="" className="w-full" />
          <div class='text-start'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Reverse Engineering</p>
              <p className='my-3'>
                CAD/CAM stands for Computer-Aided Design and Computer-Aided Manufacturing. It's a technology that integrates the design and manufacturing processes, allowing for efficient and accurate product development.
              </p>
              <Link to="/cad/reverseEng">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>Reverse Engineering
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-20'></div>
            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img3} alt="" className="w-full" />
          <div class='text-start'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Quality Control & 3D Inspection</p>
              <p className='my-3'>
                preliminary version of a product or system that is built to test a concept, process, or design. The main purpose of creating a prototype is to evaluate and validate ideas, functionalities, and design aspects before full-scale
              </p>
              <Link to="/cad/qualityControl">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  Quality Control & 3D Inspection
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-36'></div>
            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img4} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Surface Modelling & Solid Modelling</p>
              <p className='my-3'>
                Manufacturing 3D scanning plays a significant role in various aspects of the production process, offering capabilities for quality control, reverse engineering, and the optimization of manufacturing workflows.
              </p>
              <Link to="/cad/surfaceMod">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  Surface Modelling & Solid Modelling
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-36'></div>
            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img5} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Gd & T</p>
              <p className='my-3'>
                CAM, or Computer-Aided Manufacturing, is a technology that uses computer software and machinery to automate and control manufacturing processes.
              </p>
              <Link to="/cad/gDandT">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  Gd & T
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-14 mb-6'></div>
            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img6} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Class A Surfacing</p>
              <p className='my-3'>
                Class A surfacing refers to the creation of high-quality, aesthetically pleasing, and precisely engineered 3D surfaces in computer-aided design (CAD).
              </p>
              <Link to="/cad/classSurface">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600 '>
                  Class A Surfacing
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-14 mb-6'></div>
            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6  lg:col-span-4  ...'>
          <img src={Img7} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Product Design Service</p>
              <p className='my-3'>
                Reverse engineering is the process of deconstructing and analyzing a product, system, or component to understand its structure, functionality, and design principles.
              </p>
              <Link to="/cad/productDesign">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  Product Design Service
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-14'></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className='py-10 px-8 mx-8'>
      <div class="grid grid-cols-12 gap-6 ">
        <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img8} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>2D Drafting</p>
              <p className='my-3'>
                CAM, or Computer-Aided Manufacturing, is a technology that uses computer software and machinery to automate and control manufacturing processes.
              </p>
              <Link to="/cad/drafting">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  2D Drafting
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-24'></div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img9} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Conversion of 2D To 3D</p>
              <p className='my-3'>
                Class A surfacing refers to the creation of high-quality, aesthetically pleasing, and precisely engineered 3D surfaces in computer-aided design (CAD).
              </p>
              <Link to="/cad/conversion">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  Conversion of 2D To 3D
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-24'></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='bg-black py-16 px-12 '>
      <div className='text-center flex-col flex items-center '>
        <div className='text-2xl font-bold text-white'>
          CAM SERVICES
        </div>
      </div>


      <div class="grid grid-cols-12 gap-6 mt-14">
        <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img10} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>CNC Machining</p>
              <p className='my-3'>
                CAM, or Computer-Aided Manufacturing, is a technology that uses computer software and machinery to automate and control manufacturing processes.
              </p>
              <Link to="/cad/cNCMachining">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  CNC Machining
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-24'></div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img11} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>VMC Machining</p>
              <p className='my-3'>
                Class A surfacing refers to the creation of high-quality, aesthetically pleasing, and precisely engineered 3D surfaces in computer-aided design (CAD). (CAD).
              </p>
              <Link to="/cad/vMCMachining">
                <p className='font-semibold hover:text-pink-500 text-lg text-gray-600'>
                  VMC Machining
                </p>
              </Link>
              <div className='border-b-2 border-gray-600 mt-1 w-24'></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <Footer />

  </div>
}

export default CadServices