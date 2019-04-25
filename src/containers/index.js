import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
        This is the app page
      </div>
    );
  }
}

export default App;
