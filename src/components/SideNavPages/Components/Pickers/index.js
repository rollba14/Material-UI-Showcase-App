import React, {Component} from 'react';
import './style.styl';
import {TextField, Icons, Grid, Paper,CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class PickersPage extends Component{
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
     return (
      <div className="demo-pickers">
      <form noValidate>
         <TextField
           label="Select a Date"
           defaultValue="2019-05-16T10:30"
           type="datetime-local"
         />
       </form>
       </div>
     )
   }

  render(){
    return(
      <div>
        <TabsTemplate label="pickers"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }

}

export default PickersPage;
