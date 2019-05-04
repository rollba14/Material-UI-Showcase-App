import React, {Component} from 'react';
import './style.styl';
import {AppBar, Tabs, Tab, Paper} from '../';

class TabsTemplate extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 1,
      label: this.props.label || "No Label"
    }
  }

  handleTabChange=(event,value)=>{
    this.setState({
      selectedTab: value
    })
  }

  render(){
    const value = this.state.selectedTab
    return(
      <div className="example-template">
        <Paper>
          <AppBar className="app-bar" position="static">
            <Tabs value={value} onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            >
              <Tab label={this.state['label'].toUpperCase() + " DEMO"} className="tab"/>
              <Tab label="Sample Usage" className="tab"/>
            </Tabs>
          </AppBar>
          <div className="example-body">
            {value === 0 && <div>{this.state['content'] || "Sorry there's no demo yet"}</div>}
            {value === 1 && <div>Markdown content goes here</div>}
          </div>
        </Paper>
      </div>
    )
  }
}

export default TabsTemplate;
