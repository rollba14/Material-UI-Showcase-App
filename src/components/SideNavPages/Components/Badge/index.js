import React, {Component} from 'react';
import './style.styl';
import {Badge, Icons, Paper,CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class BadgePage extends Component{
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
    return(
      <div className="demo-badge">
        <h3>Simple Badges</h3>
        <div className="flex-x-space-evenly">
          <Badge badgeContent={3} color="primary">
              <Icons.Mail />
          </Badge>
          <Badge badgeContent={6} color="secondary">
              <Icons.Mail />
          </Badge>
        </div>
        <h3>Badges with Maximum Value</h3>
        <div className="flex-x-space-evenly">
          <Badge badgeContent={99} color="primary">
              <Icons.AccountBoxRounded />
          </Badge>
          <Badge badgeContent={1000} max={999} color="secondary">
              <Icons.AccountBoxRounded />
          </Badge>
          <Badge badgeContent={100} color="primary">
              <Icons.AccountBoxRounded />
          </Badge>
        </div>
        <h3>Dot Badges</h3>
        <div className="flex-x-space-evenly">
          <Badge color="secondary" variant="dot">
              <Icons.Mail />
          </Badge>
          <Badge color="primary" variant="dot">
              <Icons.Mail />
          </Badge>
        </div>
      </div>
    )
  }

  render(){
    return(
      <TabsTemplate label="button"
        content={this.createContent()}
        markdown={this.buildMarkdown()}
      />
    )
  }
}

export default BadgePage;
