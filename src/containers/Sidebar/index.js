import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse, ActionCreators} from '../../components';
import ListItemTemplate from '../../components/ListItemTemplate'
import {connect} from 'react-redux'

class Sidebar extends Component{
  mapNodetoListItem=(node)=>{
    let subItems = null;
    let key = node.label + '-Toggler';
    if(node['subNavItems']){
      subItems = node['subNavItems'].map(n=>this.mapNodetoListItem(n))
    }
    return (
      <div className="list-item-node" key={key}>
        <ListItemTemplate label={node.label} icon={node.icon} url={node.url} subItems={subItems} toggleFn={this.props.toggleCollapsableItem.bind(this,key)}/>
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

const mapDispatchToProps = (dispatch) =>{
  return{
    toggleCollapsableItem: (label)=>{
      dispatch(
        ActionCreators.toggleCollapsableItem(label)
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
