import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography} from '../../components';

class Sidebar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        This is a sidebar
      </div>
    )
  }
}

export default Sidebar;
