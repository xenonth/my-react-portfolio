import React from 'react';

//import Dream string statement from text file
import DreamText from './text/DreamText';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({

    space: {
        margin: "1%",
    },
    header: {
        textAlign: "center",
    }
}))


function Dream() {
    const classes = useStyles();

    return (
       <div className={classes.root}>
           <h3 className={classes.header}>
           My Dream
           </h3>

           <DreamText className={classes.space}/>
       </div> 
    )
}

export default Dream;