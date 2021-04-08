import React, { Component } from 'react';

//import material UI following and apply the MUI code if internal linking works.
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import ScrollToTop from './ScrollToTop';

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
        <AppBar position="sticky">
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
            <li>
              <Button color="inherit">
                  <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
                </Button>
            </li>
            <li>
                <Button color="inherit">
                  <Link  to="about" spy={true} smooth={true}>About</Link>
                </Button>
            </li>
            <li>
                <Button color="inherit">
                    <Link  to="contact" spy={true} smooth={true}>Contact</Link>
                </Button>
            </li>
            <li>
                <ScrollToTop />
            </li>
            </ul>
            
        </AppBar>
        )
    }
}