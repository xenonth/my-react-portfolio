import React, { Component } from 'react';

//import material UI following and apply the MUI code if internal linking works.
/* <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar> */


import {Link} from 'react-scroll';
export default class header extends Component {
    render() {
        return (
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>About Me</Link></li>
          <li><Link  activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link  activeClass="active" to="contacts" spy={true} smooth={true}>contact</Link></li>
            </ul>
        )
    }
}