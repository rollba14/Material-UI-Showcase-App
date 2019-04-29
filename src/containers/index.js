import React, {Component} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from '../components/Footer';
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
        <Sidebar openSideBar={this.state.openSideBar}/>
        <div className={this.state.openSideBar? 'padding-left main':'main'}>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa. Magna eget est lorem ipsum dolor sit. Diam volutpat commodo sed egestas. Non enim praesent elementum facilisis leo vel. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Accumsan lacus vel facilisis volutpat est velit egestas. Leo vel orci porta non pulvinar. At imperdiet dui accumsan sit amet nulla. Nec sagittis aliquam malesuada bibendum arcu vitae. Amet massa vitae tortor condimentum lacinia quis vel. Quis blandit turpis cursus in hac.
              </p>
              <hr/>
              <p>
                Penatibus et magnis dis parturient montes nascetur ridiculus mus. Interdum consectetur libero id faucibus nisl tincidunt. Quam lacus suspendisse faucibus interdum posuere lorem. Morbi tristique senectus et netus et malesuada fames. Malesuada proin libero nunc consequat interdum varius. Lectus urna duis convallis convallis tellus id interdum. Velit laoreet id donec ultrices tincidunt arcu non. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Turpis egestas sed tempus urna et pharetra pharetra massa. Vestibulum sed arcu non odio euismod lacinia at. Felis eget velit aliquet sagittis id consectetur purus ut. Morbi tristique senectus et netus et malesuada fames. Amet massa vitae tortor condimentum. Nec ultrices dui sapien eget mi proin sed libero. Enim nec dui nunc mattis. Vitae tortor condimentum lacinia quis vel eros donec ac.
              </p>
              <hr/>
              <p>
                Consequat nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ut tristique et egestas quis. Donec pretium vulputate sapien nec sagittis. At lectus urna duis convallis convallis tellus id interdum. Orci dapibus ultrices in iaculis nunc sed augue. Viverra tellus in hac habitasse platea. Orci eu lobortis elementum nibh. Vitae ultricies leo integer malesuada. Arcu bibendum at varius vel pharetra vel turpis. Nisi lacus sed viverra tellus in hac habitasse platea.
              </p>
              <hr/>
              <p>
                Congue eu consequat ac felis donec et odio. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Morbi tincidunt augue interdum velit. Id faucibus nisl tincidunt eget nullam non nisi est. Bibendum enim facilisis gravida neque convallis a. Id diam vel quam elementum pulvinar etiam non quam lacus. Fermentum et sollicitudin ac orci phasellus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Scelerisque in dictum non consectetur a erat nam. Molestie ac feugiat sed lectus vestibulum mattis. Feugiat nisl pretium fusce id velit ut tortor pretium. Quis auctor elit sed vulputate mi sit amet mauris. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Tortor dignissim convallis aenean et.
              </p>
              <hr/>
              <p>
                Volutpat est velit egestas dui id ornare. Ultrices eros in cursus turpis. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Nunc consequat interdum varius sit. Sed libero enim sed faucibus turpis in eu mi bibendum. Libero id faucibus nisl tincidunt eget nullam non nisi. Rutrum quisque non tellus orci ac auctor augue mauris augue. Suscipit tellus mauris a diam. Nullam eget felis eget nunc lobortis mattis. Massa eget egestas purus viverra accumsan in nisl. Magna sit amet purus gravida quis blandit turpis cursus. Enim neque volutpat ac tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi. Dolor purus non enim praesent elementum. Nascetur ridiculus mus mauris vitae ultricies.

                Dictum fusce ut placerat orci nulla. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin nibh sit amet commodo nulla facilisi. Magna sit amet purus gravida quis blandit turpis cursus in. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Leo in vitae turpis massa sed elementum. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Facilisis mauris sit amet massa. Nisi porta lorem mollis aliquam ut porttitor leo a. Accumsan tortor posuere ac ut consequat. Mi proin sed libero enim.

                Risus ultricies tristique nulla aliquet enim tortor. Proin libero nunc consequat interdum varius sit. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Lorem ipsum dolor sit amet. Ut sem nulla pharetra diam sit amet nisl. Diam phasellus vestibulum lorem sed risus. Ut enim blandit volutpat maecenas volutpat blandit. Urna et pharetra pharetra massa. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet aliquam id diam maecenas ultricies mi eget. Id eu nisl nunc mi ipsum faucibus vitae. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Arcu cursus vitae congue mauris rhoncus aenean vel.

                Maecenas sed enim ut sem viverra aliquet eget. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Etiam non quam lacus suspendisse faucibus. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Mauris augue neque gravida in fermentum et sollicitudin. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Pharetra massa massa ultricies mi quis. Tellus molestie nunc non blandit massa enim nec. Bibendum arcu vitae elementum curabitur vitae nunc sed. Dignissim convallis aenean et tortor at risus. Aliquet nec ullamcorper sit amet. Consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra nam libero justo laoreet. Lectus arcu bibendum at varius vel pharetra vel turpis. Et tortor at risus viverra adipiscing at in tellus integer. Viverra aliquet eget sit amet. A pellentesque sit amet porttitor eget dolor. Vel risus commodo viverra maecenas accumsan.
              </p>
            </div>
            <Footer openSideBar={this.state.openSideBar}/>
        </div>
      </div>
    );
  }
}

export default App;
