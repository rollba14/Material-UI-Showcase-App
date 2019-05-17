```js
import {
  XYPlot,
  HorizontalBarSeries,
  XAxis,
  YAxis,
  LineMarkSeries,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

<XYPlot
  width={500}
  height={400}
>
  <VerticalGridLines/>
  <HorizontalGridLines/>
  <XAxis/>
  <YAxis/>
  <LineMarkSeries
    style={{
      strokeWidth: '3px'
    }}
    lineStyle={{stroke: 'green'}}
    markStyle={{stroke: 'orange'}}
    data={[{x: 1, y: 5}, {x: 1.8, y: 16}, {x: 3.2, y: 16}, {x: 4, y: 5}]}
  />
  <LineMarkSeries
    curve={'curveMonotoneX'}
    data={[{x: 1, y: 20}, {x: 2.5, y: 8}, {x: 4, y: 20}]}
  />
</XYPlot>

```
