import React, {Component} from 'react';
import './style.styl';
import {LinearProgress, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class ProgressPage extends Component {
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
      <LinearProgress color="primary"/>
      <LinearProgress color="secondary" variant="query"/>
    </div>)
  }

  render(){
    return(
      <div className="demo-progress">
        <TabsTemplate label="Progress"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default ProgressPage;
