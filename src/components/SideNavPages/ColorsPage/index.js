import React from 'react';
import './style.styl';
import {Paper} from '../../';

function ColorsPage(props){
  return(
    <div className="color-page">
      <Paper className="paper">
        <h2>This page features an external website - Colormind.io using iframe</h2>
        <br/>
        <iframe src="http://colormind.io/"> </iframe>
      </Paper>
    </div>
  )

}

export default ColorsPage;
