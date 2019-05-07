import React, {Component} from 'react';
import './style.styl';
import {SnackbarContent, Icons, IconButton, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class MessageBarPage extends Component{
  constructor(props) {
    super(props)
    this.state = { code: null }
  }

  componentWillMount() {
    fetch(markdownFile).then((response) => response.text()).then((text) => {
      this.setState({ code: text })
    })
  }

  buildMarkdown=()=>{
    return(<ReactMarkdown
      source={this.state.code}
      renderers={{code:CodeBlock}}
    />)
  }

  createContent=()=>{
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

  render(){
    return(
      <div>
        <TabsTemplate label="Message Bar"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default MessageBarPage;
