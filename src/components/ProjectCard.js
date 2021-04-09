import React, {useState} from 'react';

//import material UI Components

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';

//Material UI styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    margin: "2%",
  },
  media: {
    height: 200,
    '&:hover': {
      opacity: 0.0,
  }

  },
  linkButton: {
    textAlign: "center",
    backgroundColor: "#4CAF50",
    border: "none",
    padding: "15px 32px",
    fontSize: "16px",
    margin: "auto",
    display: "block",
  },
  linkColor: {
    color: "#FFFFFF"
  }
});

function ProjectCard (props) {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState(false);

  //on hover set component to true
  const handleToggleHoverIn = (event) => {
    event.preventDefault();
    setShowComponent(true);

  };

  //off hover set component to false
  const handleToggleHoverOut = (event) => {
    event.preventDefault();
    setShowComponent(false);
  };

  console.log("The state showComponent value is ", showComponent);

  //prop setting
  const pic = props.pic;
  const hoverPic = props.hoverPic;
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
            onMouseEnter={handleToggleHoverIn}
            onMouseLeave={handleToggleHoverOut}
          className={classes.media}
          image={pic}
          title={title}
          />
                  {showComponent ? (
            <>
              <div >
                <CardMedia 
                  component="img"
                  image={hoverPic}
                />
              </div>
                </>
              ) : null}
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
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

            <Button variant="contained" color="primary" disableElevation justify="center">
                <Link href={app} target="_blank" rel="noreferrer" className={classes.linkColor}>
                    Application
                </Link>
            </Button>

            <Button variant="contained" color="primary" disableElevation justify="center">
                <Link href={repo} target="_blank" rel="noreferrer" className={classes.linkColor}>
                    Repository
                </Link>
            </Button>
            </ButtonGroup>

      </CardActions>
    </Card>
  );
}

export default ProjectCard;