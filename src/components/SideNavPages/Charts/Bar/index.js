import React, {Component} from 'react';
import './style.styl';
import {Charts} from '../../../';
import MyData from './data.js';
import TabsTemplate from '../../../TabsTemplate'

class Bar extends Component{

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
    return(
      <div className='bar-demo'>
        <XYPlot
          width={400}
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
      </div>
    )
  }
}

export default Bar;
