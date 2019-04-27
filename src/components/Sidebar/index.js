import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, IconButton, Button, withStyles, Typography} from '../';

const styles = {
  root: {
    backgroundColor: '#fff59d',
    position: 'absolute',
    zIndex: '100',
    height: '100vh',
    width: '200px',
    top: '0',
    left: '0',
    paddingTop: '79px',
  },
  sidebar: {
    height: 'inherit',
    backgroundColor: 'inherit',
  },
  hidden: {
    display: 'none',
  }
};

class Sidebar extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={this.props.showSidebar ? '' : classes.hidden}>
        <div className={classes.root}>
          this is a sidebar
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
