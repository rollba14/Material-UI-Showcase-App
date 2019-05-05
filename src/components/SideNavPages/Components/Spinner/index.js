import React from 'react';
import './style.styl';
import {CircularProgress} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  return (<div className="flex-around-center-wrap">
    <CircularProgress color="primary"/>
    <CircularProgress color="secondary" size={50} thickness={4}/>
    <CircularProgress color="primary" size={60} thickness={4.4}/>
    <CircularProgress color="secondary" size={70} thickness={4.8}/>
  </div>)
}

function SpinnerPage(props){
  return(
    <div>
      <TabsTemplate label="Spinner" content={createContent()}/>
    </div>
  )

}

export default SpinnerPage;
