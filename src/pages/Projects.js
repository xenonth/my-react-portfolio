import React from 'react';

//social Link and Resume buttons at bottom of screen
import SideFooter from '../components/Side-Footer';

import ProjectCard from '../components/ProjectCard';


//importing project data from file modules
import rpgIdeator from '../components/projectData/rpgIdeator'
import WorkoutData from '../components/projectData/workout'
//import freshVeg from '../components/projectData/freshVeg'
//import covid19travel from '../components/projectData/covid19travel'


//import material UI components
import Grid from '@material-ui/core/Grid';

//material UI styling
import {makeStyles} from '@material-ui/core/styles';
    
const useStyles = makeStyles(() => ({
    root: {
        background: 'black',
        color: 'white',
    },
}))

function Projects () {
    const classes = useStyles()


    return (
        <Grid container>
            <Grid>

                <Grid item md={2}></Grid>

                <Grid item md={10}>
                    <ProjectCard className={classes.root}
                        pic={rpgIdeator.picture}
                        title={rpgIdeator.heading}
                        projectName={rpgIdeator.projectTitle}
                        description={rpgIdeator.description}
                        app={rpgIdeator.appLink}
                        repo={rpgIdeator.repoLink}

                    />
                                
                    <ProjectCard className={classes.root}
                        pic={WorkoutData.picture}
                        title={WorkoutData.heading}
                        projectName={WorkoutData.projectTitle}
                        description={WorkoutData.description}
                        app={WorkoutData.appLink}
                        repo={WorkoutData.repoLink}

                    />
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>

            <Grid>
                <Grid item md={2}></Grid>

                <Grid item md={10}>
          
                </Grid>
            </Grid>
        
            <SideFooter />
        </Grid>
    )
    
}

export default Projects;