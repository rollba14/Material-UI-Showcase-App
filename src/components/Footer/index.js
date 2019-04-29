import React from 'react';
import './style.styl';
import {AppBar, Toolbar, Drawer, Icons, IconButton, Button, withStyles, Typography, Paper} from '../../components';

function Footer(props){
  return(
    <div className={props.openSideBar? 'footer shorten':'footer'}>
      THIS IS A FOOTER
    </div>
  )

}

export default Footer;
