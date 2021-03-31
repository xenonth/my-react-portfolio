import React from 'react';

//import material UI Components

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

//Material UI styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    margin: "2%"
    
  },
  media: {
    height: 200,
  },
  linkButton: {
    textAlign: "center",
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    fontSize: "16px",
  },
});

function ProjectCard (props) {
  const classes = useStyles();
  const pic = props.pic;
  const title = props.title;
  const projectName = props.projectName;
  const description = props.description;
  const technologies= props.technologies
  const app = props.app;
  const repo = props.repo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pic}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <br></br>
          <Typography variant="body2" component="p">
            Technologies: {technologies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  className={classes.linkButton}>

            <Button variant="contained" color="primary" disableElevation justify="center">
                <a href={app} target="_blank" rel="noreferrer">
                    Application
                </a>
            </Button>

            <Button variant="contained" color="primary" disableElevation justify="center">
                <a href={repo} target="_blank" rel="noreferrer">
                    Repository
                </a>
            </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;