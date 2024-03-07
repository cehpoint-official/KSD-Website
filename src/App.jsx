import React from 'react';

import HomeOne from './pages/HomeOne';
import Text from './pages/Text';

const App = () => {
  return (

    <div>
      <HomeOne />
      {/* <Text /> */}
    </div>

    // <BrowserRouter>
    //   <>
    //     <ol>
    //       <li>
    //         <h2 className='p-2'>Check today work Page </h2>
    //       </li>
    //       <li>
    //         <Link className='bg-green-300 ' to="/Prototype">1. Prototype Page Click</Link>
    //       </li>
    //       <li>
    //         <Link className='bg-green-300 ' to="/manufacturing">2. Manufacturing Page Click</Link>
    //       </li>
    //     </ol>
    //   </>
    //   <Routes>
    //     <Route path="/HomeOne" element={<HomeOne />} />
    //     <Route path="/Prototype" element={<Prototype />} />
    //     <Route path="/CadServise" element={<CadServices />} />
    //     <Route path="/manufacturing" element={<Manufacturing />} />
    //     {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
