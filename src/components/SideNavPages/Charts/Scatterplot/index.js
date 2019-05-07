import React, {Component} from 'react';
import {Charts} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import importedData from './data.js'

class StackedBar extends Component{

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
        <TabsTemplate label="Area Chart" content={content}/>
      </div>
    )
  }
}

export default StackedBar;
