import React, {Component} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NotFoundPage from '../components/NotFoundPage';
import ColorsPage from '../components/SideNavPages/ColorsPage';
import HomePage from '../components/SideNavPages/HomePage';
import IconPage from '../components/SideNavPages/IconPage';
import BarPage from '../components/SideNavPages/Charts/Bar';
import ButtonPage from '../components/SideNavPages/Components/ButtonPage'
import Footer from '../components/Footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Grid, ClickAwayListener} from '../components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openSideBar: true,
    }
  }

  toggleSidebar=()=>{
    this.setState({
      openSideBar: !this.state.openSideBar,
    })
  }

  render(){
    return (
      <BrowserRouter basename={"/Material-UI-Showcase-App"}>
        <div className="App">
          <Navbar toggleSidebar={this.toggleSidebar}/>
          <Sidebar openSideBar={this.state.openSideBar}/>
          <div className={this.state.openSideBar? 'margin-left main':'main'}>
              <div className="content">
                <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/colors' component={ColorsPage}/>
                  <Route path='/icons' component={IconPage}/>
                  <Route path='/components/button' component={ButtonPage}/>
                  <Route path='/charts/bar' component={BarPage}/>
                  <Route component={NotFoundPage}/>
                </Switch>
              </div>
              <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
