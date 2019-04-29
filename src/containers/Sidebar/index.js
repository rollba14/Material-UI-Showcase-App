import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Router} from '../../components';

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
          <Router.Link to="/">
            <ListItem button>
              <ListItemIcon>
                <Icons.Home/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
          </Router.Link>
          <Divider/>

          <Router.Link to="/colors">
            <ListItem button>
              <ListItemIcon>
                <Icons.ColorLens/>
              </ListItemIcon>
              <ListItemText primary="Colors"/>
            </ListItem>
          </Router.Link>
          <Divider/>

          <Router.Link to="/components">
            <ListItem button>
              <ListItemIcon>
                <Icons.Widgets/>
              </ListItemIcon>
              <ListItemText primary="Components"/>
            </ListItem>
          </Router.Link>
          <Divider/>

          <Router.Link to="/charts">
            <ListItem button>
              <ListItemIcon>
                <Icons.ShowChart/>
              </ListItemIcon>
              <ListItemText primary="Charts"/>
            </ListItem>
          </Router.Link>
          <Divider/>

          <Router.Link to="/icons">
            <ListItem button>
              <ListItemIcon>
                <Icons.BlurOn/>
              </ListItemIcon>
              <ListItemText primary="Iconography"/>
            </ListItem>
          </Router.Link>
          <Divider/>
        </List>
      </div>
    )
  }
}

export default Sidebar;
