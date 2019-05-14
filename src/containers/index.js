import React, {Component} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {NotFoundPage, ColorsPage, HomePage, IconPage, ChartsPages, ComponentsPages, Footer} from '../components';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {
  render(){
    return (
      <BrowserRouter basename={"/Material-UI-Showcase-App"}>
        <div className="App">
          <Navbar/>
          <Sidebar/>
          <div className={this.props.openSideBar? 'margin-left main':'main'}>
              <div className="content">
                <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/colors' component={ColorsPage}/>
                  <Route path='/icons' component={IconPage}/>
                  <Route path='/components/button' component={ComponentsPages.ButtonPage}/>
                  <Route path='/components/table' component={ComponentsPages.TablePage}/>
                  <Route path='/components/treeTable' component={ComponentsPages.TreeTablePage}/>
                  <Route path='/components/tabs' component={ComponentsPages.TabsPage}/>
                  <Route path='/components/spinner' component={ComponentsPages.SpinnerPage}/>
                  <Route path='/components/progress' component={ComponentsPages.ProgressPage}/>
                  <Route path='/components/messageBar' component={ComponentsPages.MessageBarPage}/>
                  <Route path='/components/notification' component={ComponentsPages.NotificationPage}/>
                  <Route path='/components/dialog' component={ComponentsPages.DialogPage}/>
                  <Route path='/components/avatar' component={ComponentsPages.AvatarPage}/>
                  <Route path='/components/markdown' component={ComponentsPages.MarkdownPage}/>
                  <Route path='/components/badge' component={ComponentsPages.BadgePage}/>
                  <Route path='/charts/bar' component={ChartsPages.Bar}/>
                  <Route path='/charts/stackbar' component={ChartsPages.StackedBar}/>
                  <Route path='/charts/area' component={ChartsPages.Area}/>
                  <Route path='/charts/line' component={ChartsPages.Line}/>
                  <Route path='/charts/pie' component={ChartsPages.Pie}/>
                  <Route path='/charts/scatterplot' component={ChartsPages.Scatterplot}/>
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

const mapStateToProps = (state) =>{
  return{
    openSideBar: state.sideBarToggler.openSideBar
  }
}


export default connect(mapStateToProps)(App);
