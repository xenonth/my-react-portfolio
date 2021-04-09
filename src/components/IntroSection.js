import React from 'react';

//import Intro string statement from text file
import IntroText from './text/IntroText';
import DreamText from './text/DreamText';
import LifeText from './text/LifeText';
import IntroCard from './IntroCard';
import ParliPic from './../pages/parliament.jpg';
import SnapShot from "./snapshot.JPG";

import Grid from '@material-ui/core/Grid';

//useStyles for footer background to remain at the bottom

function Intro() {
  
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <IntroCard 
                    pic={SnapShot}
                    title={"my-profile"}
                    alt={"my-profile"}
                    intro={<>
                        There are some who call me...Tim
                        </>}
                    description= {<IntroText />}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <IntroCard 
                    pic={ParliPic}
                    title={"parliament-speech"}
                    alt={"parliament-speech"}
                    intro={<>
                        My Dream
                        </>}
                    description= {<DreamText />}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <IntroCard 
                    intro={<>
                        Technical Experience:
                        </>}
                    description= {<LifeText />}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <IntroCard 
                    intro={<>
                        Other Experience:
                        </>}
                    description= {"Additionally, I have strong ability and understanding of justice culture theory, threat and error management and safety management systems."}
                />


            </Grid>
            

            
        </Grid>
    )
}

export default Intro;
  
