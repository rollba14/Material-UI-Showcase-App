import React, {Component} from 'react';
import './style.styl';
import {Icons, IconButton, Button, Typography, Paper, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import data from './data.js'
import markdownFile from './markdown.md'

class ButtonPage extends Component{
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
    let buttonTypes = data.buttonTypes;
    let outputEle = buttonTypes.map(t=>{
      let myKey = `Button${t.type}Type`;
      let buttonDemos = [];
      t.styles.forEach(s=>{
        buttonDemos.push((<Button
          color={s.color || 'default'}
          variant={s.variant || 'text'}
          disabled={s.disabled || false}
          size={s.size || 'medium'}
          key={`Button${t.type}Type-${s.label}`}
          >
          {s.label.toUpperCase()}
        </Button>))
      })
      return(<div
        className="demo-body" key={myKey}>
        <h3 className="demo-title">{t.type}</h3>
        <div className="demo-content">
          {buttonDemos}
        </div>
      </div>)
    })
    return outputEle
  }


  render(){
    return(
      <div>
        <TabsTemplate label="button"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default ButtonPage;
