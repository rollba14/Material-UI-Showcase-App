import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, IconButton, Button, withStyles, Typography} from '../../components';
import IconPopover from '../../components/IconPopover'

class Navbar extends Component{
  render(){
    return(
      <div className='navbar-root'>
        <AppBar>
          <Toolbar>
            <Button onClick={()=>{this.props.toggleSidebar()}}>
              <Icons.Menu/>
            </Button>
            <Typography className='grow'>
              MUI - Showcase
            </Typography>
            <IconPopover/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar;
