import React, {Component} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {Grid, ClickAwayListener} from '../components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openSideBar: false,
    }
  }

  toggleSidebar=()=>{
    this.setState({
      openSideBar: !this.state.openSideBar,
    })
  }

  

  render(){
    return (
      <div className="App">
        <Navbar toggleSidebar={this.toggleSidebar}/>
        <div className="main">
          <ClickAwayListener onClickAway={()=>{this.toggleSidebar()}}>
            <Sidebar openSideBar={this.state.openSideBar}/>
          </ClickAwayListener>
          main content
        </div>
      </div>
    );
  }
}

export default App;
