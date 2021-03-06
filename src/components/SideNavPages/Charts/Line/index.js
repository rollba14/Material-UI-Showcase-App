import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate';
import markdownFile from './markdown.md'

class Line extends Component{
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
      LineSeries,
      LineMarkSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className="demo-line">
      <XYPlot
        height={this.state.dimensions.height}
        width={this.state.dimensions.width}
      >
      <VerticalGridLines/>
      <HorizontalGridLines/>
        <XAxis title="X"/>
        <YAxis title="Y"/>
        <LineSeries
          data={[
            {x: 1, y: 7},
            {x: 2, y: 3},
            {x: 3, y: 10},
            {x: 4, y: 9}
          ]}/>
        <LineSeries
          style={{
            strokeDasharray: '2 2'
          }}
          data={[
            {x: 1, y: 8},
            {x: 1.8, y: 10},
            {x: 2.7, y: 3},
            {x: 4, y: 11}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          color="orange"
          data={[
            {x: 1, y: 5},
            {x: 2.4, y: 9},
            {x: 4, y: 5}
          ]}/>
      </XYPlot>
      </div>
    )
    return (
      <TabsTemplate label="Line Chart"
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

export default Line;
