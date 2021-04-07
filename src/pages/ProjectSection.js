import React, {Component} from "react"; 

import Projects from '../components/Projects';

//import material UI components
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';

class Home extends Component {
    render () {    
    return (
        <Grid container spacing={0}>
            <Grid item md={1}></Grid>

            <Grid item md={10} xs={12}>
                    
                <Box component="div" id="home" display="inline" p={1}>
                    <Projects id="projects" />
                </Box>
            </Grid>
            <Grid item md={1}></Grid>
        </Grid>
    )
}}

export default Home;