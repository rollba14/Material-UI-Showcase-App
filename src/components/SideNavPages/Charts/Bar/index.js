import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import MyData from './data.js';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class Bar extends Component{
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
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-bar'>
            <XYPlot
              width={500}
              height={400}
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

    return(
      <div className="demo-charts">
        <TabsTemplate label="Bar Chart"
          content={content}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default Bar;
