import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import importedData from './data.js'
import markdownFile from './markdown.md'

class Scatterplot extends Component{
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
              width={500}
              height={400}
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

    return(
      <div className="demo-charts">
        <TabsTemplate label="Scatterplot Chart"
          content={content}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default Scatterplot;
