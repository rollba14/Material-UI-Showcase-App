import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
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
    const {
      XYPlot,
      VerticalBarSeries,
      XAxis,
      YAxis,
      LineSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-stackedbar'>
        <XYPlot
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
          xDomain={[1,9]}
          yDomain={[0,25]}
          stackBy="y"
        >
          <VerticalGridLines />
          <HorizontalGridLines/>
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            data={[
              {x: 1, y: 3}, {x: 2, y: 10}, {x: 3, y: 13},
              {x: 4, y: 7}, {x: 5, y: 2}, {x: 6, y: 7},
              {x: 7, y: 6}, {x: 8, y: 5}, {x: 9, y: 10},
            ]}
          />
          <VerticalBarSeries
            data={[
              {x: 1, y: 6}, {x: 2, y: 7}, {x: 3, y: 7},
              {x: 4, y: 5}, {x: 5, y: 9}, {x: 6, y: 9},
              {x: 7, y: 8}, {x: 8, y: 3}, {x: 9, y: 7},
            ]}
          />
          <VerticalBarSeries
            data={[
              {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 4},
              {x: 4, y: 8}, {x: 5, y: 3}, {x: 6, y: 5},
              {x: 7, y: 4}, {x: 8, y: 9}, {x: 9, y: 5},
            ]}
          />
        </XYPlot>
    </div>)
    return (
      <TabsTemplate label="Stacked Bar Chart"
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

export default StackedBar;
