import React from 'react';

//social Link and Resume buttons at bottom of screen
import SideFooter from '../components/Side-Footer';

import ProjectCard from '../components/ProjectCard';

//import material UI components
import Grid from '@material-ui/core/Grid';

//material UI styling
import {makeStyles} from '@material-ui/core/styles';

const projectData = {
    rpgIdeator: {
        picture: '',
        heading: "rpg-Idea",
        projectTitle: "RPG Ideator",
        description: "A tool for authors and game masters to assist in the development of their world building.",
        appLink: "https://rpg-ideator.herokuapp.com",
        repoLink: "https://github.com/xenonth/rpg-planner",
    },
} 
const useStyles = makeStyles(() => ({
    root: {
        background: 'black',
        color: 'white',
    },
}))

function Projects () {
    const classes = useStyles();


    return (
        <Grid container>
            <Grid>

                <Grid item md={2}></Grid>

                <Grid item md={10}>
                    <ProjectCard className={classes.root}
                        pic={projectData.rpgIdeator.picture}
                        title={projectData.rpgIdeator.heading}
                        projectName={projectData.rpgIdeator.projectTitle}
                        description={projectData.rpgIdeator.description}
                        app={projectData.rpgIdeator.appLink}
                        repo={projectData.rpgIdeator.repoLink}

                    />
                

                
                    <ProjectCard className={classes.root}
                        pic={projectData.rpgIdeator.picture}
                        title={projectData.rpgIdeator.heading}
                        projectName={projectData.rpgIdeator.projectTitle}
                        description={projectData.rpgIdeator.description}
                        app={projectData.rpgIdeator.appLink}
                        repo={projectData.rpgIdeator.repoLink}

                    />
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>

            <Grid>
                <Grid item md={2}></Grid>

                <Grid item md={10}>
                <ProjectCard className={classes.root}
                    pic={projectData.rpgIdeator.picture}
                    title={projectData.rpgIdeator.heading}
                    projectName={projectData.rpgIdeator.projectTitle}
                    description={projectData.rpgIdeator.description}
                    app={projectData.rpgIdeator.appLink}
                    repo={projectData.rpgIdeator.repoLink}

                />
                
                <ProjectCard className={classes.root}
                    pic={projectData.rpgIdeator.picture}
                    title={projectData.rpgIdeator.heading}
                    projectName={projectData.rpgIdeator.projectTitle}
                    description={projectData.rpgIdeator.description}
                    app={projectData.rpgIdeator.appLink}
                    repo={projectData.rpgIdeator.repoLink}

                />
                </Grid>
            </Grid>
        
            <SideFooter />
        </Grid>
    )
    
}

export default Projects;