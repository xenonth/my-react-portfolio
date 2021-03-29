
import myResume from './../TIMOTHY-ALEXANDER-FORBES-resume.pdf';
import React from 'react';

//Link to a google drive doc would be the easiest solution.

function DownloadResume() {
    return (
        <button >
      
            <a 
                href={myResume}
                target="_blank"
                rel="noreferrer"
                download="TIMOTHY-FORBES-resume"
            >
                RESUME
            </a> 
        </button>

    )
}
<p class="text-center">

</p>

export default DownloadResume;