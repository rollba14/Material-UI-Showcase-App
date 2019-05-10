import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import MyData from './data.js';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class Bar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      code: null,
      dimensions: null
    }
  }

  componentWillMount() {
    fetch(markdownFile).then((response) => response.text()).then((text) => {
      this.setState({ code: text })
    })
  }

  componentDidMount=()=>{
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions()
  }

  updateDimensions=()=>{
    this.setState({
      dimensions:{
        width: this.container.clientWidth - 50,
        height: this.container.clientHeight - 103
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
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-bar'>
        <XYPlot
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
          xDomain={[0,20]}
          yDomain={[0,8]}
        >
          <VerticalGridLines />
          <HorizontalGridLines/>
          <XAxis />
          <YAxis />
          <HorizontalBarSeries
            data={MyData}
            style={{}}
          />
        </XYPlot>
    </div>)
    return (<TabsTemplate label="Bar Chart"
      content={content}
      markdown={this.buildMarkdown()}
    />)
  }

  render(){

    return(
      <div className="demo-charts" ref={div=>{this.container = div}}>
        { this.state.dimensions && this.renderContent() }
      </div>
    )
  }
}

export default Bar;
