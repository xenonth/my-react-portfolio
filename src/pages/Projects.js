import React from 'react';

//social Link and Resume buttons at bottom of screen
import SideFooter from '../components/Side-Footer';

import ProjectCard from '../components/ProjectCard';


//importing project data from file modules
import rpgIdeator from '../components/projectData/rpgIdeator'
import WorkoutData from '../components/projectData/workout'
import freshVeg from '../components/projectData/freshVeg'
import covid19travel from '../components/projectData/covid19Planner'


//import material UI components
import Grid from '@material-ui/core/Grid';

//material UI styling
import {makeStyles} from '@material-ui/core/styles';
    
const useStyles = makeStyles(() => ({
    root: {
        background: 'black',
        color: 'white',
        direction: "column",
        alignItems: "center",
        justify: "center",
    },
    
}))

function Projects () {
    const classes = useStyles()


    return (
        <Grid container spacing={0}>
            
                <Grid item xs={12} sm={6}>
                    <ProjectCard className={classes.root}
                        pic={rpgIdeator.picture}
                        title={rpgIdeator.heading}
                        projectName={rpgIdeator.projectTitle}
                        description={rpgIdeator.description}
                        app={rpgIdeator.appLink}
                        repo={rpgIdeator.repoLink}
                        technologies={rpgIdeator.technologies}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>         
                    <ProjectCard className={classes.root}
                        pic={WorkoutData.picture}
                        title={WorkoutData.heading}
                        projectName={WorkoutData.projectTitle}
                        description={WorkoutData.description}
                        app={WorkoutData.appLink}
                        repo={WorkoutData.repoLink}
                        technologies={WorkoutData.technologies}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>

                <ProjectCard className={classes.root}
                        pic={freshVeg.picture}
                        title={freshVeg.heading}
                        projectName={freshVeg.projectTitle}
                        description={freshVeg.description}
                        app={freshVeg.appLink}
                        repo={freshVeg.repoLink}
                        technologies={freshVeg.technologies}
                    />
                    </Grid>
                <Grid item xs={12} sm={6}>

                <ProjectCard className={classes.root}
                        pic={covid19travel.picture}
                        title={covid19travel.heading}
                        projectName={covid19travel.projectTitle}
                        description={covid19travel.description}
                        app={covid19travel.appLink}
                        repo={covid19travel.repoLink}
                        technologies={covid19travel.technologies}
                    />
          
                </Grid>
        
            <SideFooter />
        </Grid>
    )
    
}

export default Projects;