import React from 'react';

//import social media icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// material UI Box component
import  Box from '@material-ui/core/Box'
import Link from "@material-ui/core/Link"

function SocialLinks() {
    
  return (
        <div> 
            <Box component="p" m={1} display="inline">
                <Link href="https://www.facebook.com/timothy.forbes.50" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
            </Box>
            
            <Box component="p" m={1} display="inline">
                <Link href="https://www.linkedin.com/in/timothy-forbes-260711b9/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </Box>

            <Box component="p" m={1} display="inline">
                <Link href="https://github.com/xenonth"target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
            </Box>
        </div>
  );
}

export default SocialLinks;