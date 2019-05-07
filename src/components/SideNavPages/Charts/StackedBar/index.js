import React, {Component} from 'react';
import {Charts} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

class StackedBar extends Component{

  render(){
    const {
      XYPlot,
      VerticalBarSeries,
      XAxis,
      YAxis,
      LineSeries,
      VerticalGridLines,
      HorizontalGridLines
    } = Charts;

    const content = (
      <div className='stackedbar-demo'>
            <XYPlot
              width={500}
              height={400}
              xDomain={[1,9]}
              yDomain={[0,25]}
              stackBy="y"
            >
              <VerticalGridLines />
              <HorizontalGridLines/>
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                data={[
                  {x: 1, y: 3}, {x: 2, y: 10}, {x: 3, y: 13},
                  {x: 4, y: 7}, {x: 5, y: 2}, {x: 6, y: 7},
                  {x: 7, y: 6}, {x: 8, y: 5}, {x: 9, y: 10},
                ]}
              />
              <VerticalBarSeries
                data={[
                  {x: 1, y: 6}, {x: 2, y: 7}, {x: 3, y: 7},
                  {x: 4, y: 5}, {x: 5, y: 9}, {x: 6, y: 9},
                  {x: 7, y: 8}, {x: 8, y: 3}, {x: 9, y: 7},
                ]}
              />
              <VerticalBarSeries
                data={[
                  {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 4},
                  {x: 4, y: 8}, {x: 5, y: 3}, {x: 6, y: 5},
                  {x: 7, y: 4}, {x: 8, y: 9}, {x: 9, y: 5},
                ]}
              />
            </XYPlot>
      </div>)

    return(
      <div className="demo-charts">
        <TabsTemplate label="Stacked Bar Chart" content={content}/>
      </div>
    )
  }
}

export default StackedBar;
