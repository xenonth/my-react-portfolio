import React from 'react';

// imported for user authentication
import { BrowserRouter as Router, Route} from "react-router-dom";

//import page files 
import Home from './pages/Home';


//components which sit outside the main page
import Header from './components/Header';
import Footer from './components/SocialLinks'





function App() {

  return (
    <Router>
      <Header />
        <Route exact path ="/" component={Home} />
        <Route exact path ="/home" component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
