import React from 'react';

//import Intro string statement from text file
import IntroText from './text/IntroText';
import DreamText from './text/DreamText';
import LifeText from './text/LifeText';
import IntroCard from './IntroCard';
import ParliPic from './../pages/parliament.jpg';

import Grid from '@material-ui/core/Grid';

//useStyles for footer background to remain at the bottom
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    header: {
        textAlign: "center",
    }
}))


function Intro() {
    const classes = useStyles();

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <IntroCard 
                    pic = {ParliPic}
                    intro={<h3 className={classes.header}>
                        There are some who call me...Tim
                        </h3>}
                    description= {<IntroText />}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <IntroCard 
                    pic = {ParliPic}
                    intro={<h3 className={classes.header}>
                        My Dream
                        </h3>}
                    description= {<DreamText />}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <IntroCard 
                    intro={<h3 className={classes.header}>
                        Technical Experience:
                        </h3>}
                    description= {<LifeText />}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <IntroCard 
                    intro={<h3 className={classes.header}>
                        Other Experience:
                        </h3>}
                    description= {"Additionally, I have a stron understanding of justice culture theory, threat and error management and safety management systems."}
                />


            </Grid>
            

            
        </Grid>
    )
}

export default Intro;
  
