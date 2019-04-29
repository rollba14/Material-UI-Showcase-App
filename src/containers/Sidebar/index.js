import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '../../components';

class Sidebar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Icons.Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Icons.ColorLens/>
            </ListItemIcon>
            <ListItemText primary="Colors"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Icons.Widgets/>
            </ListItemIcon>
            <ListItemText primary="Components"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Icons.ShowChart/>
            </ListItemIcon>
            <ListItemText primary="Charts"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Icons.BlurOn/>
            </ListItemIcon>
            <ListItemText primary="Iconography"/>
          </ListItem>
          <Divider/>
        </List>
      </div>
    )
  }
}

export default Sidebar;
