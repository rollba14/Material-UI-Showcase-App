import React, {Component} from 'react';
import './style.styl';
import {AppBar, Toolbar, Icons, Menu, MenuItem, IconButton, Button, Typography, List, ListItem} from '../';
import {connect} from "react-redux"

class IconPopover extends Component{
  render(){
    const {anchorEl, handleClick, handleClose, items} = this.props;
    const menuItems = items.map(i=>{
      return (<MenuItem onClick={handleClose} key={i.name+"PopOver"}>
        <a href={i.link}>{i.name}</a>
      </MenuItem>)
    })
    return(
      <div>
        <IconButton
          aria-owns={anchorEl ? 'icon-popper':undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <Icons.AccountCircle/>
        </IconButton>
        <Menu
          id="icon-popper"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
         {menuItems}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    anchorEl: state.rightItemMenu.anchorEl,
    items: state.rightItemMenu.items,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleClick: (event)=>{
      dispatch({
        type:"OPEN_RIGHT_ITEM_MENU",
        anchorEl: event.currentTarget
      })
    },
    handleClose: ()=>{
      dispatch({
        type:"CLOSE_RIGHT_ITEM_MENU",
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IconPopover);
