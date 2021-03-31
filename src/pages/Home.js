import React from 'react';

//import who I am statements for home webpage in order of display
import Intro from '../components/Intro';
import parliPic from './parliament.jpg';

import Life from '../components/Life';

//social Link and Resume buttons to be placed on side above md, and at bottom below md
import SideFooter from '../components/Side-Footer';

//import material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

//material UI styling
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: 'black',
        color: 'white',
    },
}))
const picAlt = "Parliament Speech"

function Home() {
    const classes = useStyles();
        

    return (
        <Grid container>
            <Grid item md={1}></Grid>

            <Grid item md={10} xs={12}>
                    
                <Box component="div" display="inline" p={1}>
                    <Intro picLink={parliPic} alt={picAlt}/>
                </Box>

                <Paper className={classes.root}> 
                    <Life />
                </Paper>
            </Grid>
            <Grid item md={1}></Grid>
            
            <Box p={1}>
                <SideFooter />
            </Box>
        </Grid>
    )
}

export default Home;