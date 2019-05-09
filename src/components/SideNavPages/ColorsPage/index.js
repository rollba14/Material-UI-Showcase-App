import React from 'react';
import './style.styl';
import {Paper} from '../../';

function ColorsPage(props){
  return(
    <div className="color-page">
      <Paper className="paper">
        <h2>This page features an external website—Colorhunt.co using iframe</h2>
        <br/>
        <iframe src="https://colorhunt.co/"> </iframe>
      </Paper>
    </div>
  )

}

export default ColorsPage;
