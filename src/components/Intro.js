import React from 'react';

//import Intro string statement from text file
import IntroText from './text/IntroText';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    header: {
        textAlign: "center",
    }
}))


function Intro() {
    const classes = useStyles();

    return (
        <div>
           <h3 className={classes.header}>
           There are some who call me...Tim
           </h3>

           <IntroText />
        </div>
    )
}

export default Intro;
  
