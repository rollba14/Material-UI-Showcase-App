import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class WhiskerSeries extends Component{
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
      WhiskerSeries,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-whisker-series'>
        <XYPlot
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
          xDomain={[0.8,2.4]}
          yDomain={[2,16]}
        >
          <VerticalGridLines />
          <HorizontalGridLines/>
          <XAxis />
          <YAxis />
          <WhiskerSeries
            data={[
              {x: 1, y: 8, xVariance: 0.3, yVariance: 4},
              {x: 1.3, y: 12, xVariance: 0.2, yVariance: 4},
              {x: 1.4, y: 5, xVariance: 0.2, yVariance: 3},
              {x: 2.2, y: 10, xVariance: 0.1, yVariance: 7},
              {x: 1.8, y: 7, xVariance: 0.2, yVariance: 5}
            ]}
          />
        </XYPlot>
    </div>)
    return (<TabsTemplate label="Whisker Series"
      content={content}
      markdown={this.buildMarkdown()}
    />)
  }

  render(){
    return(
      <div className="demo-charts" >
        { this.state.dimensions && this.renderContent() }
      </div>
    )
  }
}

export default WhiskerSeries;
