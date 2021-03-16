import React from 'react';

//import social links.
import SocialLinks from './SocialLinks';

import DownloadResume from './DownloadResume';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },

}));

function SideFooter() {
    const classes = useStyles();

    return (
            <div className={classes.root} >
                <SocialLinks />
                <DownloadResume />
            </div>
    )
}

export default SideFooter;