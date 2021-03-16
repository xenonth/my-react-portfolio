
import React from 'react';

//import material UI button
import Button from '@material-ui/core/Button';

function DownloadResume() {
    return (
        <Button  variant="contained" color="primary">
      
            <a 
                href="../assets/TIMOTHY-ALEXANDER-FORBES-resume.pdf" 
                target="_blank" 
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