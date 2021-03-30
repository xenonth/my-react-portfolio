import React from 'react';

//import material UI Components

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Material UI styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    justifyContent: "center",
    
  },
  media: {
    height: 140,
  },
});

function ProjectCard (props) {
  const classes = useStyles();
  const pic = props.pic;
  const title = props.title;
  const projectName = props.projectName;
  const description = props.description;
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
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

            <button>
                <a href={app} target="_blank" rel="noreferrer">
                    Application
                </a>
            </button>

            <button>
                <a href={repo} target="_blank" rel="noreferrer">
                    Repository
                </a>
            </button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;