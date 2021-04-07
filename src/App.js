import React from 'react';

//import page files 
import Home from './pages/Home';

import SideFooter from './components/Side-Footer'



//components which sit outside the main page
import NavBar from './components/NavBar';

function App() {

  return (
    <div>

      <NavBar />
      
        <Home />

        <SideFooter />
      
    </div>
    
  );
}

export default App;
