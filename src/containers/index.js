import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {Grid} from '../components';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          main content
        </div>
      </div>
    );
  }
}

export default App;
