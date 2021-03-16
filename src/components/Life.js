import React from 'react';

//import Life string statement from text file
import LifeText from './text/LifeText';

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


function Life() {
    const classes = useStyles();

    return (
        <div>
           <h3 className={classes.header}>
           Life Experience
           </h3>

           <LifeText className={classes.space}/>
        </div>

    )
}

export default Life;