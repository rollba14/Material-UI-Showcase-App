import React, {Component} from 'react';
import './style.styl';
import { Button, Snackbar, Icons, IconButton } from '../../../';
import TabsTemplate from '../../../TabsTemplate'

class NotificationPage extends Component{
  constructor(props){
    super(props)
    this.state ={
      open: false
    }
  }

  handleOpen=()=>{
    this.setState({
      open: true
    })
  }

  handleClose=(event,reason)=>{
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  render(){
    const content = (<div className="demo-notification-wrapper">
      <Button color="primary" className="ft-weight-bold" variant="outlined" onClick={this.handleOpen}>
        Trigger a notification
      </Button>
      <Snackbar
        id="demo-notification"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={this.state.open}
        autoHideDuration={5000}
        onClose={this.handleClose}
        message={
          <span>A new notification has triggered!</span>
        }
        action={
          <IconButton
           onClick={this.handleClose}>
           <Icons.Close/>
          </IconButton>
        }
      />
    </div>)

    return(
      <div>
        <TabsTemplate label="Notification" content={content}/>
      </div>
    )
  }
}

export default NotificationPage;
