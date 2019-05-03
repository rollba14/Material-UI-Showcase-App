import React from 'react';
import './style.styl';
import {AppBar} from '../../';

function ColorsPage(props){
  return(
    <div className="color-page">
      <h1>Colormind.io</h1>
      <iframe src="http://colormind.io/"> </iframe>
    </div>
  )

}

export default ColorsPage;
