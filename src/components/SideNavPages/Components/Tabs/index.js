import React from 'react';
import './style.styl';
import {AppBar,Tabs,Tab} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function TabsPage(props){
  return(
    <div>
      <TabsTemplate label="Tabs" content={<TabsTemplate label="Sample" content={"Contents of Tab 1"} markdown={"Contents of Tab 2"}/>}/>
    </div>
  )

}

export default TabsPage;
