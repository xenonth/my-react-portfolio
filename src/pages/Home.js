import React from 'react';

//import who I am statements for home webpage in order of display
import Intro from '../components/Intro';

import Dream from '../components/Dream';

import Life from '../components/Life';

//import material UI components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

//material UI styling
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: 'black',
        color: 'white',
    },
}))


function Home() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={1}></Grid>

            <Grid item md={9}>
                <Paper className={classes.root}>
                    <Intro />
                </Paper>
            
            
            
                <Paper className={classes.root}>
                    <Dream />
                </Paper>
                
                

                <Paper className={classes.root}> 
                    <Life />
                </Paper>
            </Grid>

            <Grid item md={2}></Grid>
        
        </Grid>
    )
}

export default Home;