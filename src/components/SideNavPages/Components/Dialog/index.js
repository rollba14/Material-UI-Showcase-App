import React, {Component} from 'react';
import './style.styl';
import {Dialog, Typography, Icons, Button, IconButton, Divider} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

class DialogPage extends Component{
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }

  handleClose=()=>{
    this.setState({
      open:false
    })
  }

  handleOpen=()=>{
    this.setState({
      open:true
    })
  }

  render(){
    const content = (<div className="demo-dialog">
      <Button variant="contained" color="primary" onClick={this.handleOpen}>
      Open Dialog
      </Button>
      <Dialog
        onClose={this.handleClose}
        open={this.state.open}
      >
        <div className="demo-dialog-title">
          <Typography variant="h5">Dialog Title</Typography>
            <IconButton aria-label="Close" onClick={this.handleClose}>
              <Icons.Close/>
            </IconButton>
        </div>
        <Divider/>
        <div className="demo-dialog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Divider/>
        <div className="demo-dialog-action">
          <Button onClick={this.handleClose} color="primary" variant="contained">
            Save Changes
          </Button>
        </div>
      </Dialog>
    </div>)

    return(
      <div>
        <TabsTemplate label="Dialog" content={content}/>
      </div>
    )
  }
}

export default DialogPage;
