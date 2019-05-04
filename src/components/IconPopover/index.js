import React, {Component} from 'react';
import './style.styl';
import {AppBar, Toolbar, Icons, Menu, MenuItem, IconButton, Button, Typography, List, ListItem} from '../';

class IconPopover extends Component{
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    }
  };

  handleClick = event =>{
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose=()=>{
    this.setState({
      anchorEl: null,
    })
  }

  render(){
    const {classes} = this.props;
    const {anchorEl} = this.state;
    return(
      <div>
        <IconButton
          aria-owns={anchorEl ? 'icon-popper':undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <Icons.AccountCircle/>
        </IconButton>
        <Menu
          id="icon-popper"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <a href="https://www.yahoo.com/">Yahoo</a>
          </MenuItem>
          <MenuItem>
            <a href="https://www.google.com/">Google</a>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <a href="https://www.bing.com/">Bing</a>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default IconPopover;
