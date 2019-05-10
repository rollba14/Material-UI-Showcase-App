import React, {Component} from 'react';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class Pie extends Component{
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
          width={this.state.dimensions.height}
          height={this.state.dimensions.height}
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
      <TabsTemplate label="Pie Chart"
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

export default Pie;
