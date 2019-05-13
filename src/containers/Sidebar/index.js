import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse, connect} from '../../components';
import navItems from './data.js'
import ListItemTemplate from '../../components/ListItemTemplate'


class Sidebar extends Component{
  constructor(props){
    super(props)
  }

  mapNodetoListItem=(node)=>{
    let subItems = null;
    if(node['subNavItems']){
      subItems = node['subNavItems'].map(n=>this.mapNodetoListItem(n))
    }
    return (
      <div className="list-item-node" key={node.label + node.icon}>
        <ListItemTemplate label={node.label} icon={node.icon} url={node.url} subItems={subItems}/>
      </div>
    )

  }

  render(){
    const navElements = navItems.navItems.map(this.mapNodetoListItem)
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        <List component="nav">
          {navElements}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    openSideBar: state.sideBarToggler.openSideBar
  }
}

export default connect(mapStateToProps)(Sidebar);
