import React from 'react';

import HomeOne from './pages/HomeOne';
import Text from './pages/Text';
import Demo from './component/Demo';
import ContactUs from './pages/Main-servicec-page/ContactUs';
import Prototype from './pages/Main-servicec-page/Prototype';
import CadServices from './pages/Main-servicec-page/CadServices';
import Manufacturing from './pages/Main-servicec-page/Manufacturing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeTest from './pages/CodeTest';

const App = () => {
  return (

    // <div>
    //   <HomeOne />
    //   {/* <ContactUs /> */}
    // </div>

    // <CodeTest />

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/cadServise" element={<CadServices />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
