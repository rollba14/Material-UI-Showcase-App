import React from 'react';
import './style.styl';
import {LinearProgress} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  return (<div className="demo-progress">
    <LinearProgress color="primary"/>
    <LinearProgress color="secondary" variant="query"/>
  </div>)
}

function ProgressPage(props){
  return(
    <div>
      <TabsTemplate label="Progress" content={createContent()}/>
    </div>
  )

}

export default ProgressPage;
