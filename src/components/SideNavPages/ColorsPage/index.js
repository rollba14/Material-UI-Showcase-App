import React from 'react';
import './style.styl';
import {AppBar} from '../../';
import TabsTemplate from '../../DemoExamples/TabsTemplate'

function ColorsPage(props){
  return(
    <div className="color-page">
      This is the color page.
      <TabsTemplate/>
    </div>
  )

}

export default ColorsPage;
