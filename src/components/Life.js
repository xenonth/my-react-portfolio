import React from 'react';

//import Life string statement from text file
import LifeText from './text/LifeText';

//import material UI components for formatting as necessary
import Paper from '@material-ui/core/Paper'
//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        background: "black",
        color: "white",
        
    },
    space: {
        margin: "1%",
    }
}))


function Life() {
    const classes = useStyles();

    return (
       <Paper className={classes.root}>
           <h3>
           Life Experience
           </h3>

           <LifeText />
       </Paper> 
    )
}

export default Life;