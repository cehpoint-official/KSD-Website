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



        {/* Company Page */}

        < Route path="/contactUs" element={<ContactUs />} />
        <Route path="/company/quote" element={<Quote />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
