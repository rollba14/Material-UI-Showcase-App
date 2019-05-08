import React, {Component} from 'react';
import './style.styl';
import {CircularProgress, CodeBlock, ReactMarkdown } from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class SpinnerPage extends Component{
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
    return (<div>
      <CircularProgress color="primary"/>
      <CircularProgress color="secondary" size={50} thickness={4}/>
      <CircularProgress color="primary" size={60} thickness={4.4}/>
      <CircularProgress color="secondary" size={70} thickness={4.8}/>
    </div>)
  }

  render(){
    return(
      <div className="demo-spinner">
        <TabsTemplate label="Spinner"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default SpinnerPage;
