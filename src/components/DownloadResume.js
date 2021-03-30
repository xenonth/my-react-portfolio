
import myResume from './../TIMOTHY-ALEXANDER-FORBES-resume.pdf';
import React from 'react';

//Link to a google drive doc would be the easiest solution.
import Button from '@material-ui/core/Button'

function DownloadResume() {
    return (
        <Button variant="contained" color="primary" disableElevation>
      
            <a 
                href={myResume}
                target="_blank"
                rel="noreferrer"
                download="TIMOTHY-FORBES-resume"
            >
                RESUME
            </a> 
        </Button>

    )
}
<p class="text-center">

</p>

export default DownloadResume;