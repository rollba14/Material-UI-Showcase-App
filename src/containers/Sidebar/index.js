import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse} from '../../components';

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state={
      open: false,
    }
  }

  toggleComp=()=>{
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    let iconName = 'Widgets';
    let DynamicIcon = Icons[iconName];
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        <List component="nav">
          <ListItem button component={Router.Link} to={'/'}>
            <ListItemIcon>
              <Icons.Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <Divider/>

          <ListItem button component={Router.Link} to={'/colors'}>
            <ListItemIcon>
              <Icons.ColorLens/>
            </ListItemIcon>
            <ListItemText primary="Colors"/>
          </ListItem>
          <Divider/>

          <ListItem button component={Router.Link} to={'/components'} onClick={()=>{this.toggleComp()}}>
            <ListItemIcon>
              <DynamicIcon/>
            </ListItemIcon>
            <ListItemText primary="Components"/>
            {this.state.open ? <Icons.ExpandLess /> : <Icons.ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} unmountOnExit className="nested">
            <List>
            <ListItem button component={Router.Link} to={'/charts'}>
              <ListItemIcon>
                <Icons.TagFaces/>
              </ListItemIcon>
              <ListItemText primary=":D"/>
            </ListItem>
            </List>
          </Collapse>
          <Divider/>

          <ListItem button component={Router.Link} to={'/charts'}>
            <ListItemIcon>
              <Icons.ShowChart/>
            </ListItemIcon>
            <ListItemText primary="Charts"/>
          </ListItem>
          <Divider/>

          <ListItem button component={Router.Link} to={'/icons'}>
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
