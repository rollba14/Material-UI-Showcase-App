import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, IconButton, Button, withStyles, Typography} from '../';

const styles = {
  root: {
    backgroundColor: '#26a69a',
    flexGrow: 1,
  },
  appbar: {
    height: 'inherit',
    backgroundColor: 'inherit',
  },
  grow:{
    flexGrow: 1,
  }
};

class Navbar extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.appbar}>
            <Button>
              <Icons.Menu/>
            </Button>
            <Typography className={classes.grow}>
              MUI - Showcase
            </Typography>
            <IconButton>
              <Icons.AccountCircle/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
