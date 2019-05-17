import React, {Component} from 'react';
import './style.styl';
import {Chip, Icons, IconButton, Button, Typography, Paper, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class ChipPage extends Component{
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
    return(<div className="demo-chip">
      <div>
        <Chip
          icon={<Icons.Face />}
          label="Red Chip"
          clickable
          color="secondary"
          onDelete={()=>{}}
          deleteIcon={<Icons.ClearSharp/>}
        />
      </div>
      <div>
        <Chip
          icon={<Icons.ChildCareOutlined />}
          label="Green Chip"
          clickable
          className="teal-bg"
          onDelete={()=>{}}
          deleteIcon={<Icons.Done />}
        />
      </div>
      <div>
        <Chip
          icon={<Icons.SentimentSatisfiedAltRounded />}
          label="Blue Chip"
          clickable
          color="primary"
          onDelete={()=>{}}
          deleteIcon={<Icons.ExpandMore />}
        />
      </div>
    </div>)
  }


  render(){
    return(
      <div>
        <TabsTemplate label="chip"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default ChipPage;
