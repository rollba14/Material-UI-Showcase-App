import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate';
import markdownFile from './markdown.md'

class Line extends Component{
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

  render(){
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
        height={400} width={500}
      >
      <VerticalGridLines/>
      <HorizontalGridLines/>
        <XAxis title="X"/>
        <YAxis title="Y"/>
        <LineSeries
          data={[
            {x: 1, y: 3},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 12}
          ]}/>
        <LineSeries
          style={{
            strokeDasharray: '2 2'
          }}
          data={[
            {x: 1, y: 10},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 15}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          color="orange"
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>
      </XYPlot>
      </div>
    )

    return(
      <div className="demo-charts">
        <TabsTemplate label="Line Chart"
          content={content}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default Line;
