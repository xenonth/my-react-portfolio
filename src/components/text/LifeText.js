import React from 'react';

//import material UI Box
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    margin: "2%",
  },  
});

function LifeText() {
    const classes = useStyles();
    return (
        <Box component="article" p={1} className={classes.root}>
            IT technical experience includes:
            <ul> 
                <li>
                    Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
                </li>
                <li>
                    Applications: GitHub, MongoDB, MySQL
                </li>
                <li>
                    Tools: Express, React, Node, Handlebars, Query, Bootstrap, Material UI
                </li>
            </ul>
            
            Five years combined experience in Aviation across justice culture theory, threat and error management, safety management systems, pilot training and frontline groundhandling experience.  Additionally, organisation, management and teamwork experience from extracurricular activities and voluntary roles.            
        </Box>
    )
}

export default LifeText;
