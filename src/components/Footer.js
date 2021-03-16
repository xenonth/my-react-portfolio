import react from 'react';

//Material UI components
import Grid from '@material-ui/core/Grid'


//import social links.
import SocialLinks from './SocialLinks';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    root: {
        bottom: "0",
        width: "100",
        height: "100px",
        
    },

}));

function Footer() {
    const classes = {useStyles};

    return (
        <Grid container>
            <Grid>
            
                <SocialLinks/>
            </Grid>

        </Grid>
    )
}

export default Footer;