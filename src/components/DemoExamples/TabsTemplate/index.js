import React, {Component} from 'react';
import './style.styl';
import {AppBar, Tabs, Tab, Paper} from '../../';

class ColorsPage extends Component{
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
              <Tab label={this.state.label} />
              <Tab label="Sample Usage" />
            </Tabs>
          </AppBar>
          {value === 0 && <div>1</div>}
          {value === 1 && <div>2</div>}
        </Paper>
      </div>
    )
  }
}

export default ColorsPage;
