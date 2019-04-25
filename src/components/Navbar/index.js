import React, {Component} from 'react';
import './style.styl'
import {AppBar, Toolbar, Icons, IconButton, Button} from '../';

class Navbar extends Component{
  render(){
    return(
      <div className="navbar">
        <AppBar>
          <Toolbar>
            <Button>
              <Icons.Menu/>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar;
