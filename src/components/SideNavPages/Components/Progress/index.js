import React from 'react';
import './style.styl';
import {LinearProgress} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  return (<div>
    <LinearProgress color="primary"/>
    <LinearProgress color="secondary" variant="query"/>
  </div>)
}

function ProgressPage(props){
  return(
    <div className="demo-progress">
      <TabsTemplate label="Progress" content={createContent()}/>
    </div>
  )

}

export default ProgressPage;
