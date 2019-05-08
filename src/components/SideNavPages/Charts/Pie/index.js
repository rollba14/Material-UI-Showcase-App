import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class Pie extends Component{
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
      RadialChart,
      XAxis,
      YAxis,
      LineSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='demo-area'>
            <RadialChart
              width={350}
              height={350}
              data={[
                {
                  angle: 30,
                  label: 'Apple'
                },
                {
                  angle: 11,
                  label: 'Google'
                },
                {
                  angle: 4,
                  label: 'Facebook'
                },
                {
                  angle: 3,
                  label: 'Netflix'
                },
                {
                  angle: 17,
                  label: 'Amazon'
                }
              ]}

              labelsStyle={{
                fontSize: 12
              }}
              showLabels
            >
            </RadialChart>
      </div>)

    return(
      <div className="demo-charts">
        <TabsTemplate label="Pie Chart"
          content={content}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default Pie;
