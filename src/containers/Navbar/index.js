import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Router, Toolbar, Icons, IconButton, Button, withStyles, Typography, ActionCreators} from '../../components';
import IconPopover from '../../components/IconPopover'
import {connect} from 'react-redux';

class Navbar extends Component{
  render(){
    return(
      <div className='navbar-root'>
        <AppBar>
          <Toolbar>
            <Button onClick={()=>{this.props.toggleSidebar()}}>
              <Icons.Menu/>
            </Button>
            <Typography className='grow typography'>
              <Router.Link to='/'>MUI - SHOWCASE</Router.Link>
            </Typography>
            <IconPopover/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    toggleSidebar: ()=> {dispatch(
      ActionCreators.toggleSidebar()
     )
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
