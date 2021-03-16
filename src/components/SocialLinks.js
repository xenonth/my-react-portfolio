import React from 'react';

//import social media icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// material UI Box component
import  Box from '@material-ui/core/Box'


//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        background: "#6cf",
        display: 'flex',
        justifyContent: 'center',
        textAlign: "center",
    },
    iconClass: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: "center",
    }

}));




function SocialLinks() {
    const classes = {useStyles};
    
  return (
        <section className={classes.root}> 
            <Box component="p" m={1} display="inline">
                <a href="https://www.facebook.com/timothy.forbes.50" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className={classes.iconClass}/>
                </a>
            </Box>
            
            <Box component="p" m={1} display="inline">
                <a href="https://www.linkedin.com/in/timothy-forbes-260711b9/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={classes.iconClass}/>
                </a>
            </Box>

            <Box component="p" m={1} display="inline">
                <a href="https://github.com/xenonth"target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={classes.iconClass}/>
                </a>
            </Box>
        </section>
  );
}

export default SocialLinks;