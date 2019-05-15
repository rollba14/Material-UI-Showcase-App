import React, {Component} from 'react';
import './style.styl';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Icons, Typography, Paper,CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class ExpansionPanelPage extends Component{
  constructor(props){
    super(props);
    this.state={
      expanded: 'panel1',
      code: null,
    }
  }

  buildMarkdown=()=>{
    return(<ReactMarkdown
      source={this.state.code}
      renderers={{code:CodeBlock}}
    />)
  }

  changeExpandedPanel=(event,expanded,panel)=>{
    if(expanded){
      this.setState({
        expanded: panel
      })
    } else {
      this.setState({
        expanded: false
      })
    }
  }

  createContent=()=>{
    const {expanded} = this.state
    return(
      <div className="demo-expansion-panel">
        <ExpansionPanel
          square
          expanded={expanded ==='panel1'}
          onChange={(e,expanded)=>{this.changeExpandedPanel(e,expanded,'panel1')}}
          className="expansion-panel"
        >
          <ExpansionPanelSummary className="expansion-panel-summary">
            <Typography>Collapsible Group Item #1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded ==='panel2'}
          onChange={(e,expanded)=>{this.changeExpandedPanel(e,expanded,'panel2')}}
          className="expansion-panel"
        >
          <ExpansionPanelSummary className="expansion-panel-summary">
            <Typography>Collapsible Group Item #2</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Sit amet nulla facilisi morbi. Suspendisse potenti nullam ac tortor vitae purus. Tincidunt dui ut ornare lectus sit amet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded ==='panel3'}
          onChange={(e,expanded)=>{this.changeExpandedPanel(e,expanded,'panel3')}}
          className="expansion-panel"
        >
          <ExpansionPanelSummary className="expansion-panel-summary">
            <Typography>Collapsible Group Item #3</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis commodo odio. Mauris vitae ultricies leo integer malesuada nunc vel. Tristique senectus et netus et malesuada fames ac. Scelerisque viverra mauris in aliquam sem. Id nibh tortor id aliquet lectus.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }

  render(){
    return(
      <TabsTemplate label="Expansion Panel"
        content={this.createContent()}
        markdown={this.buildMarkdown()}
      />
    )
  }
}

export default ExpansionPanelPage;
