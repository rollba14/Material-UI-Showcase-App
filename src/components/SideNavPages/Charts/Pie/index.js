import React, {Component} from 'react';
import {Charts} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

class StackedBar extends Component{

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
        <TabsTemplate label="Area Chart" content={content}/>
      </div>
    )
  }
}

export default StackedBar;
