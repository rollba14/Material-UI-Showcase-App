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
          <Sidebar openSideBar={this.state.openSideBar}/>
          <div className={this.state.openSideBar? 'padding-left':''}>
            <div className="content">
              main content here
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
