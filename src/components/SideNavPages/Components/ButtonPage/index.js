import React from 'react';
import './style.styl';
import {Icons, IconButton, Button, Typography, Paper} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function ButtonPage(props){
  return(
    <div className='button-ex'>
      <Paper>
        <TabsTemplate label="button"/>
      </Paper>
    </div>
  )

}

export default ButtonPage;
