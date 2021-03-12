import react from 'react';

//Material UI components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

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
    paper: {
        background: "#6cf",
        display: 'flex',
        justifyContent: 'center',
        textAlign: "center",
    },

}));

function Footer() {
    const classes = {useStyles};

    return (
        <Grid className={classes.root} item xs={12}>
            <Paper className = {classes.paper}>
                <SocialLinks/>
            </Paper>
        </Grid>
    )
}

export default Footer;