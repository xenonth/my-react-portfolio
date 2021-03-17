import React from 'react';

//import social links.
import SocialLinks from './SocialLinks';

import DownloadResume from './DownloadResume';

//useStyles for footer background to remain at the bottom
import Box from '@material-ui/core/Box';

import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        width: '100vw'
    },

}));

function SideFooter() {
    const classes = useStyles();

    return (
            <footer className={classes.root} >
                <SocialLinks />
                <Box p={1}>
                    <DownloadResume />
                </Box>
            </footer>
    )
}

export default SideFooter;