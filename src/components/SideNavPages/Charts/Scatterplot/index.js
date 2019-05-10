import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import importedData from './data.js'
import markdownFile from './markdown.md'

class Scatterplot extends Component{
  constructor(props) {
    super(props)
    this.state = {
      code: null,
      container: null,
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
      MarkSeries,
      XAxis,
      YAxis,
      LineSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-area'>
        <XYPlot
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
          xDomain={[0,20]}
          yDomain={[0,17]}
        >
          <VerticalGridLines />
          <HorizontalGridLines/>
          <XAxis />
          <YAxis />
          <MarkSeries
             data={importedData.data}
          />
        </XYPlot>
    </div>)
    return (
      <TabsTemplate label="Scatterplot Chart"
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

export default Scatterplot;
