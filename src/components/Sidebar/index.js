import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, IconButton, Button, withStyles, Typography} from '../';

const styles = {
  root: {
    backgroundColor: '#fff59d',
    zIndex: '100',
    height: '100%',
    overflowY: 'scroll',
    padding: '10px 15px',
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
      <div>
        <div>
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
