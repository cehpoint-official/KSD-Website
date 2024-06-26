import React from 'react';

import HomeOne from './pages/HomeOne';
import ContactUs from './pages/Main-servicec-page/ContactUs';
import Prototype from './pages/Main-servicec-page/Prototype';
import CadServices from './pages/Main-servicec-page/CadServices';
import Manufacturing from './pages/Main-servicec-page/Manufacturing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReverseEng from './pages/Main-servicec-page/cadServicePages/ReverseEng';
import QualityControl from './pages/Main-servicec-page/cadServicePages/QualityControl';
import Quote from './pages/companyPages/Quote';
import SurfaceMod from './pages/Main-servicec-page/cadServicePages/SurfaceMod';
import GDandT from './pages/Main-servicec-page/cadServicePages/GDandT';
import ClassSurface from './pages/Main-servicec-page/cadServicePages/ClassSurface';
import ProductDesign from './pages/Main-servicec-page/cadServicePages/ProductDesign';
import Drafting from './pages/Main-servicec-page/cadServicePages/Drafting';
import Conversion from './pages/Main-servicec-page/cadServicePages/Conversion';
import CNCMachining from './pages/Main-servicec-page/cadServicePages/CNCMachining';
import VMCMachining from './pages/Main-servicec-page/cadServicePages/VMCMachining';
import SLAPage from './pages/Main-servicec-page/prototypeSubPages/SLAPage';
import SLSPage from './pages/Main-servicec-page/prototypeSubPages/SLSPage';
import FDMPage from './pages/Main-servicec-page/prototypeSubPages/FDMPage';
import PolyJetPage from './pages/Main-servicec-page/prototypeSubPages/PolyJetPage';
import MetalPrintPage from './pages/Main-servicec-page/prototypeSubPages/MetalPrintPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Plastic from './pages/Main-servicec-page/manufacturingSubPages/Plastic';
import Rubber from './pages/Main-servicec-page/manufacturingSubPages/Rubber';
import Casting from './pages/Main-servicec-page/manufacturingSubPages/Casting';
import Jigs from './pages/Main-servicec-page/manufacturingSubPages/Jigs';
import Injection from './pages/Main-servicec-page/manufacturingSubPages/Injection';
import Industrial from './pages/Main-servicec-page/manufacturingSubPages/Industrial';
import Automotive from './pages/IndustryPages/Automotive';
import Consumer from './pages/IndustryPages/Consumer';
import House from './pages/IndustryPages/House';
import Toys from './pages/IndustryPages/Toys';
import Defence from './pages/IndustryPages/Defence';
import Transportation from './pages/IndustryPages/Transportation';
import Medical from './pages/IndustryPages/Medical';
import KSDCourses from './pages/CoursesPages/KSDCourses';
import PayNow from './pages/Main-servicec-page/PayNow';
import Blog from './pages/companyPages/Blog';
import AboutUs from './pages/companyPages/AboutUs';

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeOne />} />


        {/* CadServices Page All Routes */}
        <Route path="/cadServise" element={<CadServices />} />
        <Route path="/cad/reverseEng" element={<ReverseEng />} />
        <Route path="/cad/qualityControl" element={<QualityControl />} />
        <Route path="/cad/surfaceMod" element={<SurfaceMod />} />
        <Route path="/cad/gDandT" element={<GDandT />} />
        <Route path="/cad/classSurface" element={<ClassSurface />} />
        <Route path="/cad/productDesign" element={<ProductDesign />} />
        <Route path="/cad/drafting" element={<Drafting />} />
        <Route path="/cad/conversion" element={<Conversion />} />
        <Route path="/cad/cNCMachining" element={<CNCMachining />} />
        <Route path="/cad/vMCMachining" element={<VMCMachining />} />

        {/* Prototype Page All Routes */}
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/prototype/slaPage" element={<SLAPage />} />
        <Route path="/prototype/fdmPage" element={<FDMPage />} />
        <Route path="/prototype/polyjet" element={<PolyJetPage />} />
        <Route path="/prototype/metal" element={<MetalPrintPage />} />
        <Route path="/prototype/slsPage" element={<SLSPage />} />

        {/* Manufacturing Page */}
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/manufacturing/plastic" element={<Plastic />} />
        <Route path="/manufacturing/rubber" element={<Rubber />} />
        <Route path="/manufacturing/casting" element={<Casting />} />
        <Route path="/manufacturing/jig" element={<Jigs />} />
        <Route path="/manufacturing/injection" element={<Injection />} />
        <Route path="/manufacturing/industrial" element={<Industrial />} />

        {/* industry Page */}

        <Route path="/industry" element={<Industrial />} />
        <Route path="/industry/automotive" element={<Automotive />} />
        <Route path="/industry/consumer" element={<Consumer />} />
        <Route path="/industry/house" element={<House />} />
        <Route path="/industry/toys" element={<Toys />} />
        <Route path="/industry/defence" element={<Defence />} />
        <Route path="/industry/transportation" element={<Transportation />} />
        <Route path="/industry/medical" element={<Medical />} />

        {/* Company Page */}

        < Route path="/contactUs" element={<ContactUs />} />
        <Route path="/company/quote" element={<Quote />} />
        <Route path="/company/aboutUs" element={<AboutUs />} />
        <Route path="/company/blog" element={<Blog />} />

        {/* Navbar Page Route */}
        {/* Courses Page */}
        < Route path="/cousers/ksd" element={<KSDCourses />} />

        {/* PayNow */}
        < Route path="/payNow" element={<PayNow />} />


        <Route path="*" element={<h1 className='text-2xl text-center h-[80vh]'>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
