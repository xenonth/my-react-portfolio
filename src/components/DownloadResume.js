
import myResume from './../TIMOTHY-ALEXANDER-FORBES-resume.pdf';
import React from 'react';

//Link to a google drive doc would be the easiest solution.
import Button from '@material-ui/core/Button'
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "#FFFFFF"
    }
})

function DownloadResume() {
    const classes = useStyles();
    return (
        <Button variant="contained" color="primary" disableElevation>
      
            <Link 
            className={classes.root}
                href={myResume}
                target="_blank"
                rel="noreferrer"
                download="TIMOTHY-FORBES-resume"
            >
                RESUME
            </Link> 
        </Button>

    )
}
<p class="text-center">

</p>

export default DownloadResume;