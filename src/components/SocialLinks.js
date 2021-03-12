import React from 'react';

// material UI Box component
import  Box from '@material-ui/core/Box'

//import social media icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
    
  return (
        <section>
            <Box component="p" m={1}>
                <a href="https://www.facebook.com/timothy.forbes.50" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </Box>
            
            <Box component="p" m={1}>
                <a href="https://www.linkedin.com/in/timothy-forbes-260711b9/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </Box>

            <Box component="p" m={1}>
                <a href="https://github.com/xenonth"target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </Box>
        </section>
  );
}

export default SocialLinks;