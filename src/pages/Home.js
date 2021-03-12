import React from 'react';

//import who I am statements for home webpage in order of display
import Intro from '../components/Intro';

import Dream from '../components/Dream';

import Life from '../components/Life';

function Home() {
    return (
        <div>
            <Intro />
            
            <br></br>
            
            <Dream />
            
            <br></br>

            <Life />
        </div>
    )
}

export default Home;