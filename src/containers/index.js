import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSidebar : false,
    }
  }

  toggleSidebar=()=>{
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar toggleSidebar={this.toggleSidebar}/>
        <Sidebar showSidebar={this.state.showSidebar}/>
        This is the app page
      </div>
    );
  }
}

export default App;
