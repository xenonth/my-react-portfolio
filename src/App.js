import React from 'react';

//import page files 

import MiddleSection from './pages/MiddleSection'

//components which sit outside the main page
import NavBar from './components/NavBar';

function App() {

  return (
    <div>

      <NavBar />
      
        <MiddleSection />
      
    </div>
    
  );
}

export default App;
