import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Icons, Popover, IconButton, Button, withStyles, Typography} from '../';

const styles = {
  root: {

  }
};

class IconPopover extends Component{
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    }
  };

  handleClick = event = >{
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
    return(
      <div className={this.classes.root}>
        <IconButton
          aria-owns={open ? 'icon-popper':undefined}
          aria-haspopup='true'
          variant="contained"
          onClick={this.handleClick}
        >
          <Icons.AccountCircle/>
        </IconButton>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <a href="https://www.google.com/">Google</a>
        </Popover>
      </div>
    )
  }
}

IconPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconPopover);
