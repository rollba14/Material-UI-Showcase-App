import React, {Component} from 'react';
import {Charts} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import importedData from './data.js'

class StackedBar extends Component{

  render(){
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
      <div className='demo-area'>
            <XYPlot
              width={500}
              height={400}
            >
              <VerticalGridLines />
              <HorizontalGridLines/>
              <XAxis />
              <YAxis />
              <AreaSeries
                 data={importedData.data}
                 opacity={0.5}
              />
            </XYPlot>
      </div>)

    return(
      <div className="demo-charts">
        <TabsTemplate label="Area Chart" content={content}/>
      </div>
    )
  }
}

export default StackedBar;
