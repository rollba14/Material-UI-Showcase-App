import React from 'react';
import './style.styl';
import {Paper} from '../../';

function HomePage(props){
  return(
    <div className="home-page">
      <div className="content">
        <Paper className="paper">
          <h1>Hi! Welcome to my Material UI Showcase App!</h1>
          <br/>
          <p>
            This is an app about all the modules and components I can build with 3rd party library Material UI and React-Vis, to create an elegant, easy-to-use web user interface (UI) while keeping the UI responsive and compatible with different browsers and devices.
          </p>
          <br/>
          <p>
            To learn more, simply click on any nav link in the left side bar.
          </p>
        </Paper>
      </div>
    </div>
  )

}

export default HomePage;
