import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import importedData from './data.js'
import markdownFile from './markdown.md'

class StackedBar extends Component{
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
    const {dimensions} = this.state
    const {
      XYPlot,
      AreaSeries,
      XAxis,
      YAxis,
      LineSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;
    const content = (
      <div ref={this.demoArea} className='demo-area'>
            <XYPlot
              width={dimensions.width}
              height={dimensions.height}
              xDomain={[0,20]}
              yDomain={[6,10.5]}
            >
              <VerticalGridLines />
              <HorizontalGridLines/>
              <XAxis />
              <YAxis />
              <AreaSeries
                 data={importedData.data}
                 curve="curveNatural"
                 opacity={0.5}
              />
            </XYPlot>
      </div>)

    return (<TabsTemplate label="Area Chart"
      content={content}
      markdown={this.buildMarkdown()}
    />)
  }

  render(){
    const {dimensions} = this.state
    return(
      <div className="demo-charts">
        {  dimensions &&
           this.renderContent()
        }
      </div>
    )
  }
}

export default StackedBar;
