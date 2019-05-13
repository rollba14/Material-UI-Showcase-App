import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse, connect} from '../../components';
import navItems from './data.js'
import ListItemTemplate from '../../components/ListItemTemplate'


class Sidebar extends Component{
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

  renderElements=()=>{
    const navElements = this.props.navItems.map(this.mapNodetoListItem);
    return (<List component="nav">
      {navElements}
    </List>)
  }

  render(){
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        {this.renderElements()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    openSideBar: state.sideBarToggler.openSideBar,
    navItems: state.sideBarItems.navItems,
  }
}

export default connect(mapStateToProps)(Sidebar);
