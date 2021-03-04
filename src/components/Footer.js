import react from 'react';

//import components
import SocialLinks from './SocialLinks';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        position: absolute,
        bottom: "0",
        width: "100%",
        height: "100px",
        background: "#6cf",
    },
}));

function Footer() {
    const classes = {useStyles};

    return (
        <footer>
            <SocialLinks />
        </footer>
    )
}

export default Footer;