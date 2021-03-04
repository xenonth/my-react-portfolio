import React from 'react';

//import material UI
import {makeStyles} from "@material-ui/core/styles"

//import social media icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

//Footer CSS Layout
const useStyles = makeStyles(() => ({
    socialSpace: {
        margin: "2%",
        textAlign: "center",
    },
}));

function SocialLinks() {
    const classes = {useStyles};
  return (
    
    <section>
        <i className={classes.socialSpace}>
            <a href="https://www.facebook.com/timothy.forbes.50" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </i>
        <i className={classes.socialSpace}>
            <a href="https://www.linkedin.com/in/timothy-forbes-260711b9/"target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </i>
        <i className={classes.socialSpace}>
            <a href="https://github.com/xenonth"target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </i>
    </section>
  );
}

export default SocialLinks;