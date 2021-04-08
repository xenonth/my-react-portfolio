import React from 'react';

//social Link and Resume buttons at bottom of screen

import ProjectCard from './ProjectCard';

//importing project data from file modules
import rpgIdeator from './projectData/rpgIdeator'
import WorkoutData from './projectData/workout'
import freshVeg from './projectData/freshVeg'

import covid19travel from './projectData/covid19Planner'

//import material UI components
import Grid from '@material-ui/core/Grid';

//pic 1 pc 2 pic 3 on hover rotate between pictures!!

//material UI styling
    
function Projects () {

    return (
        <Grid container spacing={0}>
            
                <Grid item xs={12} sm={6}>
                    <ProjectCard   
                        pic={rpgIdeator.picture}
                        title={rpgIdeator.heading}
                        hoverPic={rpgIdeator.hoverPic}
                        projectName={rpgIdeator.projectTitle}
                        description={rpgIdeator.description}
                        app={rpgIdeator.appLink}
                        repo={rpgIdeator.repoLink}
                        technologies={rpgIdeator.technologies}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>         
                    <ProjectCard  
                        pic={WorkoutData.picture}
                        title={WorkoutData.heading}
                        hoverPic={WorkoutData.hoverPic}
                        projectName={WorkoutData.projectTitle}
                        description={WorkoutData.description}
                        app={WorkoutData.appLink}
                        repo={WorkoutData.repoLink}
                        technologies={WorkoutData.technologies}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>

                <ProjectCard  
                        pic={freshVeg.picture}
                        title={freshVeg.heading}
                        hoverPic={freshVeg.hoverPic}
                        projectName={freshVeg.projectTitle}
                        description={freshVeg.description}
                        app={freshVeg.appLink}
                        repo={freshVeg.repoLink}
                        technologies={freshVeg.technologies}
                    />
                    </Grid>
                <Grid item xs={12} sm={6}>

                <ProjectCard  
                        pic={covid19travel.picture}
                        title={covid19travel.heading}
                        projectName={covid19travel.projectTitle}
                        hoverPic={covid19travel.hoverPic}
                        description={covid19travel.description}
                        app={covid19travel.appLink}
                        repo={covid19travel.repoLink}
                        technologies={covid19travel.technologies}
                    />
          
                </Grid>
        </Grid>
    )
    
}

export default Projects;