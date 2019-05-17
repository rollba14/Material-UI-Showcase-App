import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate';
import markdownFile from './markdown.md'

class LineMark extends Component{
  constructor(props) {
    super(props)
    this.state = {
      code: null,
      container: null,
      dimensions: null,
    }
  }

  componentWillMount() {
    fetch(markdownFile).then((response) => response.text()).then((text) => {
      this.setState({ code: text })
    })
  }

  componentDidMount=()=>{
    window.addEventListener("resize", this.updateDimensions);
    let div = document.getElementsByClassName('demo-charts')[0]
    this.setState({
      container: div
    },()=>{
      this.updateDimensions()
    })
  }

  updateDimensions=()=>{
    this.setState({
      dimensions:{
        width: this.state.container.clientWidth - 50,
        height: this.state.container.clientHeight - 103
      }
    })
  }

  buildMarkdown=()=>{
    return(<ReactMarkdown
      source={this.state.code}
      renderers={{code:CodeBlock}}
    />)
  }

  renderContent=()=>{
    const {
      XYPlot,
      HorizontalBarSeries,
      XAxis,
      YAxis,
      LineMarkSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className="demo-line-mark">
      <XYPlot
        height={this.state.dimensions.height}
        width={this.state.dimensions.width}
      >
      <VerticalGridLines/>
      <HorizontalGridLines/>
        <XAxis/>
        <YAxis/>
        <LineMarkSeries
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{stroke: 'green'}}
          markStyle={{stroke: 'orange'}}
          data={[{x: 1, y: 5}, {x: 1.8, y: 16}, {x: 3.2, y: 16}, {x: 4, y: 5}]}
        />
        <LineMarkSeries
          curve={'curveMonotoneX'}
          data={[{x: 1, y: 20}, {x: 2.5, y: 8}, {x: 4, y: 20}]}
        />
      </XYPlot>
      </div>
    )
    return (
      <TabsTemplate label="Line Mark Chart"
        content={content}
        markdown={this.buildMarkdown()}
      />
    )
  }

  render(){
    return(
      <div className="demo-charts">
        { this.state.dimensions && this.renderContent() }
      </div>
    )
  }
}

export default LineMark;
