import React from 'react';

//import material UI Box
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    text: {
        
        color: 'black',
    },
}))



function IntroText() {
    const classes = useStyles();

    return (
        <Box component="article" p={1} className={classes.text}>
            Ideas bouncer creative fixated on innovation oppurtunities. Have manifested a deep passion for making the theoretical become reality because if a positive change is possible heaven and earth will be moved to see the idea through to completion.
        </Box>
    )
}

export default IntroText;