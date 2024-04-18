import React from 'react'
import Img1 from "../../asset/Website-Picture-gallery/3.jpeg"
import Img2 from "../../asset/Website-Picture-gallery/4.jpg"
import Img3 from "../../asset/Website-Picture-gallery/5.webp"
import Img4 from "../../asset/Website-Picture-gallery/6.webp"
import Img5 from "../../asset/Website-Picture-gallery/7.png"
import Img6 from "../../asset/main-services-page/cmd-service/img-6.png"
import Img7 from "../../asset/main-services-page/cmd-service/img-7.png"
import Img8 from "../../asset/Website-Picture-gallery/8.png"
import Img9 from "../../asset/Website-Picture-gallery/1.jpg"
import Img10 from "../../asset/Website-Picture-gallery/12.png"
import Img11 from "../../asset/Website-Picture-gallery/11.jpeg"
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

const CadServices = () => {
  return <div>
    {/* <Navbar /> */}
    <div className='bg-black text-white py-10 px-8 '>
      <div className=" grid grid-cols-12  gap-4 ">

        <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
          <img src={Img1} alt="" className=" w-full h-full   object-cover " />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 space-y-5 lg:my-4">
          <div className="text-4xl font-bold">3D CAD/CAM Services</div>
          {/* <div className="border-b-2 w-36 sm:w-40 border-gray-200"></div> */}
          <div className=" text-base font-light pt-6">
            Our CAD CAM Service integrates Computer-Aided Design (CAD) with Computer-Aided Manufacturing (CAM) to streamline product development. Utilizing advanced software, we design precise 2D/3D models and seamlessly translate them into manufacturing instructions. From concept to production, our service optimizes workflows, ensuring accuracy and efficiency in the manufacturing process. We specialize in creating detailed designs and generating machine-readable instructions, enabling precise and automated manufacturing of components or products with high precision and adherence to industry standards.

          </div>
          <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
            Get a Quote
          </button>
        </div>

      </div>


      <div className='text-center flex-col flex items-center mt-24'>
        <div className='text-2xl font-bold'>
          Our 3D CAD Services
        </div>
        <div className='md:pb-10 lg:pb-12 text-lg md:w-[60%] lg:w-[50%] text-gray-300 py-8'>
          <p>
            KSD tand industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move.
          </p>
        </div>
      </div>
    </div>

    <div className='text-white py-10 px-8 md:mx-8 mx-4 '>


      <div class='grid grid-cols-12 gap-8  '>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img2} alt="" className="w-full h-[18rem] object-fill" />
          <div class='text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Reverse Engineering</p>
              <p className='my-3'>
                Reverse engineering is the process of analyzing and understanding the design, structure, and functionality of a product or system by working backward from its final form.
              </p>
              <Link to="/cad/reverseEng" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img3} alt="" className="w-full h-[18rem] object-fill" />
          <div class='text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Quality Control & 3D Inspection</p>
              <p className='my-3'>
                A quality inspection involves measuring, examining, testing, or gauging various characteristics of a product and comparing those results with specified requirements to determine whether there is a conformity.
              </p>
              <Link to="/cad/qualityControl" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img4} alt="" className="w-full h-[18rem] object-fill" />
          <div class='text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Surface Modelling & Solid Modelling</p>
              <p className='my-3'>
                Surface Modeling is the method of showing or presenting solid objects. The process requires you to convert between different 3D modeling types, such as converting the 3D object to show procedural surfaces, validate imperfections, and apply smoothness.
              </p>
              <Link to="/cad/surfaceMod" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img5} alt="" className="w-full h-[18rem] object-fill" />
          <div class=' text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Gd & T</p>
              <p className='my-3'>
                GD&T is an acronym that stands for Geometric Dimensioning and Tolerancing. It is a symbolic language used by designers to communicate manufacturing constraints and tolerances clearly.
              </p>
              <Link to="/cad/gDandT" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6 lg:col-span-4'>
          <img src={Img6} alt="" className="w-full h-[18rem] object-fill" />
          <div class='text-center '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Class A Surfacing</p>
              <p className='my-3'>
                Class A surfacing is done using computer-aided industrial design applications. Class A surface modellers are also called "digital sculptors" in the industry
              </p>

              <Link to="/cad/classSurface" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class='col-span-12 md:col-span-6  lg:col-span-4  ...'>
          <img src={Img7} alt="" className="w-full h-[18rem] object-fill" />
          <div class='bg-white text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Product Design Service</p>
              <p className='my-3'>
                Product design is the process of ideating, developing, and refining products that meet specific market needs and solve user problems.
              </p>
              <Link to="/cad/productDesign" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </div>

    <div className='py-10 px-8 mx-8'>
      <div class="grid grid-cols-12 gap-6 ">
        <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img8} alt="" className="w-full h-[18rem] object-fill" />
          <div class='text-center'>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>2D Drafting</p>
              <p className='my-3'>
                2D drafting and drawing is the process of creating and editing technical drawings, as well as annotating designs. Drafters use computer-aided design (CAD) software to develop floor plans, building permit drawings, building inspection plans and landscaping layouts.
              </p>
              <Link to="/cad/drafting" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img9} alt="" className="w-full h-[18rem] object-fill" />
          <div class='bg-white text-center '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>Conversion of 2D To 3D</p>
              <p className='my-3'>
                To convert a 2D image to a 3D model, use software like Blender or Autodesk Fusion 360. Import the image, create a base mesh, and extrude or sculpt based on the image contours.
              </p>
              <Link to="/cad/conversion" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

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


      <div class="grid grid-cols-12 gap-6  mt-14">
        <div class="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img10} alt="" className="w-full h-[18rem] object-fill" />
          <div class='bg-white text-center'>
            <div className='border-slate-500  p-5'>
              <p className='font-semibold text-xl text-slate-800'>CNC Lathe Machining</p>
              <p className='my-3'>
                A CNC lathe(CNC turning machine) is a machine that spins material around a central spindle and a fixed cutting tool. Instead of being controlled by physical labor, the movement of your components is determined by coded instructions fed to a computer
              </p>
              <Link to="/cad/cNCMachining" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img11} alt="" className="w-full h-[18rem] object-fill" />
          <div class='bg-white text-center '>
            <div className='border-slate-500  pb-16  text-black p-5'>
              <p className='font-semibold text-xl text-slate-800'>VMC Machining</p>
              <p className='my-3'>
                VMC machines, also known as Vertical Machining Centers, are highly advanced and versatile machines that are used for metal cutting and other metalworking operations.
              </p>
              <Link to="/cad/vMCMachining" className='flex justify-center items-center gap-2 hover:text-red-500'>
                <p className='font-serif text-lg'>
                  Read More
                </p>
                <i className='bi bi-arrow-right text-2xl'></i>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </div>

    {/* <Footer /> */}

  </div >
}

export default CadServices