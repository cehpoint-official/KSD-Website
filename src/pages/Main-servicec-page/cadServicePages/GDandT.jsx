import React from 'react'
import Img1 from "../../../asset/Website-Picture-gallery/7.png"
import Img2 from "../../../asset/main-services-page/cmd-service/GDandT/img-2.png"
import Img3 from "../../../asset/main-services-page/cmd-service/GDandT/img-3.png"
import Img4 from "../../../asset/main-services-page/cmd-service/GDandT/img-4.png"
import Img5 from "../../../asset/main-services-page/cmd-service/GDandT/img-5.png"
import Img6 from "../../../asset/main-services-page/cmd-service/GDandT/img-6.png"
import Img7 from "../../../asset/main-services-page/cmd-service/GDandT/img-7.png"
import Img8 from "../../../asset/main-services-page/cmd-service/GDandT/img-8.png"
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer'

const GDandT = () => {
  return <div>
    {/* <Navbar /> */}
    <div className='bg-black text-white py-10 px-10 '>
      <div className=" grid grid-cols-12  gap-4 ">
        <div className=" col-span-12 md:col-span-6 lg:col-span-6  p-4">
          <img src={Img1} alt="" className=" object-fill " />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 p-4 lg:mt-14 space-y-5 ">
          <div className="text-4xl font-bold">GD & T</div>
          <div className=" text-base font-light pt-6">
            GD&T is an acronym that stands for Geometric Dimensioning and Tolerancing. It is a symbolic language used by designers to communicate manufacturing constraints and tolerances clearly.
          </div>
          <button className='hover:border-pink-700 hover:bg-pink-600  border-pink-500 border-2 hover:text-white text-pink-400 focus:border-2 font-bold px-10 py-2 rounded-lg md:mb-0 md:mr-2'>
            Get a Quote
          </button>
        </div>

      </div>


      <div className='text-center flex-col flex items-center mt-28'>
        <div className='text-2xl font-bold '>
          Why GD & T?
        </div>
        <div className='bg-pink-600 w-28 mt-3 h-[3px] rounded-xl'></div>
      </div>

      <div className='grid grid-cols-12 gap-6 md:m-10  my-10'>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>Reduces amount of notes, dimensions</p>
          </div>
        </div>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>
              Ensure Enterchangeability
            </p>
          </div>
        </div>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>
              Save Time During Manufacturing
            </p>
          </div>
        </div>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>
              Reduce Cost & Improve Quality
            </p>
          </div>
        </div>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>
              Reduce Rework & Scraps
            </p>
          </div>
        </div>
        <div className='lg:col-span-4 my-4 md:col-span-6 sm:col-span-6 col-span-12'>
          <div className='flex gap-3 items-center'>
            <i class="bi  text-pink-600 text-4xl bi-check-circle"></i>
            <p className='text-xl text-gray-400'>
              Increase Prouctivity
            </p>
          </div>
        </div>

      </div>

    </div>

    <div className=" grid grid-cols-12 bg-black  text-black">


      <div className="col-span-12 bg-white md:col-span-12 lg:col-span-6 p-10 ps-14">
        <div className="md:text-4xl text-3xl font-bold "> Why is GD&T Important? </div>
        <div className='border-b-4 w-36 mt-3 border-pink-600 rounded-xl'></div>

        <div className=" pt-6">

          <p className='text-lg my-4 font-semibold'><i className='bi bi-dot text-2xl'></i> GD&T is important for several reasons, including:</p>

          <p className='ms-6'>
            As innovation and technology continue to advance within plastic injection molding, part tolerances are becoming tighter and tighter; however, tightening tolerances unnecessarily can significantly increase costs due to higher tooling expenses and quality issues. Additionally, if tight tolerances are not achieved properly the resulting products may underperform or even fail - this is why GD&T is so crucial!

            GD&T offers the ability to improve quality, decrease cost, and increase speed to market. The GD&T drawing is the continuous thread that connects the design and manufacturing teams and keeps everyone speaking the same language – literally! By engaging the production team during the design, the part functionality can be discussed upfront and the team can jointly develop a manufacturing process that will produce high-precision components - avoiding overly tight tolerances that often drive up cost and result in quality issues during manufacturing. For these reasons, it is crucial for OEMs to partner with an injection molder, such as Crescent Industries, who has Design for Manufacturability (DFM) expertise; this simply means the design and manufacturing teams are integrated to allow manufacturability issues to be identified and addressed during the design process – saving significant time and cost!
          </p>

        </div>

      </div>
      <div className=" col-span-12 md:col-span-12 lg:col-span-6 bg-white lg:px-0 lg:pt-24 px-20">
        <img src={Img2} alt="" className=" object-fill h-[30rem] w-full " />
      </div>
    </div>
    {/* <div className='bg-black text-white p-10 pt-24  '>

      <div className='text-center flex-col flex items-center '>
        <div className='text-2xl font-bold '>
          Types of Modeling
        </div>
        <div className='bg-pink-600 w-32 mt-3 h-[3px] rounded-xl'></div>

      </div>

      <div class="grid grid-cols-12 gap-6 mt-20">
        <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img3} alt="" className="w-full " />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>plane surfaces</p>
              <p className='my-3 pb-2'>
                Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time.  field of automobile manufacturing sophisticated industry and provides sophisticated inspection solutions for OEMs during the whole cycle .
              </p>

            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img4} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Ruled surfaces</p>
              <p className='my-3'>
                A safe journey begins with precise our 3D scanning technology can inspection of transports. We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results, our 3D scanning technology can ensure the safe operation of rail transport and ship.
              </p>

            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
          <img src={Img5} alt="" className="w-full" />
          <div class='text-start '>
            <div className='border-slate-500 bg-white  text-black p-5'>
              <p className='font-semibold text-xl'>Surface of revolution</p>
              <p className='my-3'>
                Scantech is empowering the development of the energy industry with advanced 3D technology. We are committed to helping realize the goal of carbon neutrality, promote the upgrading of heavy machinery industry, and further improve intelligent manufacturing productivity.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div class="grid grid-cols-12 gap-6 mt-20 py-10 px-10 lg:px-12 ">
      <div class=" lg:col-span-4 md:col-span-6 col-span-12 ...">
        <img src={Img6} alt="" className="w-full" />
        <div class='text-start '>
          <div className='border-slate-500 bg-white  text-black p-5'>
            <p className='font-semibold text-xl'> parametric cubic surfaces</p>
            <p className='my-3'>
              Scantech has been deeply engaged in the field of automobile manufacturing industry and provides sophisticated inspection solutions for OEMs during the whole cycle time
            </p>

          </div>
        </div>
      </div>
      <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
        <img src={Img7} alt="" className="w-full" />
        <div class='text-start '>
          <div className='border-slate-500 bg-white  text-black p-5'>
            <p className='font-semibold text-xl'>Bezier surfaces</p>
            <p className='my-3'>
              A safe journey begins with precise inspection of transports. We provide unparalleled smooth 3D scanning for metrology inspection. By delivering accurate measurement results,
            </p>

          </div>
        </div>
      </div>
      <div class="lg:col-span-4 md:col-span-6 col-span-12 ...">
        <img src={Img8} alt="" className="w-full" />
        <div class='text-start '>
          <div className='border-slate-500 bg-white  text-black p-5'>
            <p className='font-semibold text-xl'> B-spline surfaces</p>
            <p className='my-3'>
              Scantech is empowering the development of the energy industry with advanced 3D technology. We are committed to helping realize the goal of carbon neutrality,
            </p>

          </div>
        </div>
      </div>
    </div> */}


    {/* <Footer /> */}
  </div>
}


export default GDandT