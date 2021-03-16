import React from 'react';

//import who I am statements for home webpage in order of display
import Intro from '../components/Intro';

import Dream from '../components/Dream';

import Life from '../components/Life';

//import material UI components
import Grid from '@material-ui/core/Grid'

function Home() {
    return (
        <Grid container>
            <Grid>
                <Intro />
            </Grid>
            
            
            
            <Grid>
                <Dream />
            </Grid>
            
            

            <Grid>
                <Life />
            </Grid>
        </Grid>
    )
}

export default Home;