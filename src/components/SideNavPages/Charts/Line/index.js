import React, {Component} from 'react';
import './style.styl';
import {Charts} from '../../../';
import TabsTemplate from '../../../TabsTemplate';

class Line extends Component{
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

    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

    const content = (
      <div className="line-demo">
      <XYPlot
        height={400} width={500}
        xDomain={[0,10]}
        yDomain={[0,10]}
      >
      <VerticalGridLines/>
      <HorizontalGridLines/>
        <XAxis title="X"/>
        <YAxis title="Y"/>
        <LineSeries data={data}/>
      </XYPlot>
      </div>
    )

    return(
      <div className="demo-charts">
        <TabsTemplate label="Line Chart" content={content}/>
      </div>
    )
  }
}

export default Line;
