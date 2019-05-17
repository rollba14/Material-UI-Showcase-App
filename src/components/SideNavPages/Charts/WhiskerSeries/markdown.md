```js
import {
  XYPlot,
  WhiskerSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

<XYPlot
  width={500}
  height={400}
>
  <VerticalGridLines />
  <HorizontalGridLines/>
  <XAxis />
  <YAxis />
  <WhiskerSeries
    data={[
      {x: 1, y: 8, xVariance: 0.3, yVariance: 4},
      {x: 1.3, y: 12, xVariance: 0.2, yVariance: 4},
      {x: 1.4, y: 5, xVariance: 0.2, yVariance: 3},
      {x: 2.2, y: 10, xVariance: 0.1, yVariance: 7},
      {x: 1.8, y: 7, xVariance: 0.2, yVariance: 5}
    ]}
  />
</XYPlot>

```
