import React from 'react';
import './style.styl';
import {SnackbarContent, Icons, IconButton} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  let messageBarsType = [
    {
      "success": "CheckCircle",
    },
    {
      "warning": "Warning",
    },
    {
      "error": "Error",
    },
    {
      "info": "Info",
    }
  ]

  return (messageBarsType.map(t=>{
    let Icon= Icons[Object.values(t)[0]]
    let msgType = Object.keys(t)[0];
    let message = msgType.charAt(0).toLowerCase() === ('a' || 'e' || 'i' || 'o' || 'u') ? `This is an ${msgType} message!` : ` This is a ${msgType} message!`;

    return (<div className="messageBar" key={msgType+'-message'} >
      <SnackbarContent
       className={msgType+'-message'}
       message={
         <span >
          <Icon/>
          <div className="message">{message}</div>
         </span>
       }
       action={[
         <IconButton
         >
          <Icons.Close/>
         </IconButton>
       ]}
       />
    </div>)
  }))

}

function MessageBarPage(props){
  return(
    <div>
      <TabsTemplate label="Message Bar" content={createContent()}/>
    </div>
  )

}

export default MessageBarPage;
