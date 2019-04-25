import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, IconButton, Button, withStyles} from '../';

const styles = {
  root: {
    backgroundColor: '#26a69a',
  },
  appbar: {
    height: 'inherit',
    backgroundColor: 'inherit',
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
