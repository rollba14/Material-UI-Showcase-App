import React, {Component} from 'react';
import './style.styl';
import {Charts, CodeBlock, ReactMarkdown} from '../../../';
import MyData from './data.js';
import TabsTemplate from '../../../TabsTemplate';
import markdownFile from './markdown.md'

class Hexbin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      code: null,
      container: null,
      dimensions: null,
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
      XAxis,
      YAxis,
      HexbinSeries,
    } = Charts;

    const content = (
      <div className="demo-hexbin">
      <XYPlot
      yDomain={[35, 100]}
      xDomain={[1.2, 5.5]}
        height={this.state.dimensions.height}
        width={this.state.dimensions.width}
      >
        <XAxis />
        <YAxis />
        <HexbinSeries
         animation
         radius={15}
         sizeHexagonsWithCount={false}
         colorRange={['orange', 'cyan']}
         xOffset={0}
         yOffset={0}
         style={{
            stroke: '#125C77',
            strokeLinejoin: 'round'
         }}
         data={MyData}
        />
      </XYPlot>
      </div>
    )
    return (
      <TabsTemplate label="Hexbin Chart"
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

export default Hexbin;
