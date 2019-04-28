import React, {Component} from 'react';
import './style.styl';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography} from '../../components';

const styles = {
  root: {

  },
};

class Sidebar extends Component{
  constructor(props){
    super(props)

  }

  render(){
    const {classes} = this.props;
    return(
      <div>
        <Drawer
          open={this.props.openSideBar}
        >
          this is a drawer
        </Drawer>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
