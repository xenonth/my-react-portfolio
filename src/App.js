import React from 'react';

//import page files 
//import Home from './pages/Home';

import MiddleSection from './pages/MiddleSection'

import SideFooter from './components/Side-Footer'



//components which sit outside the main page
import NavBar from './components/NavBar';

function App() {

  return (
    <div>

      <NavBar />
      
        <MiddleSection />

        <SideFooter />
      
    </div>
    
  );
}

export default App;
