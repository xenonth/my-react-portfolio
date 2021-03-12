import React from 'react';

//import Dream string statement from text file
import DreamText from './text/DreamText';

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


function Dream() {
    const classes = useStyles();

    return (
       <Paper className={classes.root}>
           <h3>
           There are some who call me...Tim
           </h3>

           <DreamText />
       </Paper> 
    )
}

export default Dream;