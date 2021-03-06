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
    margin: "2%",
  },
  media: {
    maxHeight: 200,
    maxWidth: 340,
    margin: "auto",
    display: "block",
  },
  linkButton: {
    textAlign: "center",
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    fontSize: "16px",

  },
  header: {
    textAlign: "center",
  }
});

function IntroCard (props) {
  const classes = useStyles();
  const pic = props.pic;
  const title = props.title;
  const alternate = props.alternate;
  const intro = props.intro
  const description = props.description;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={pic}
          title={title}
          alt={alternate}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
            {intro}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <br></br>
        </CardContent>
      </CardActionArea>
      <CardActions  className={classes.linkButton}>

      </CardActions>
    </Card>
  );
}

export default IntroCard;