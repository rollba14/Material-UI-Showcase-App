```js
import {
    XYPlot, LineSeries,
    XAxis, YAxis,
    VerticalGridLines,
    HorizontalGridLines
  } from 'react-vis';

<XYPlot
  width={500}
  height={400}
>
  <VerticalGridLines />
  <HorizontalGridLines/>
  <XAxis title="X"/>
  <YAxis title="Y"/>
  <LineSeries
    data={[
      {x: 1, y: 7},
      {x: 2, y: 5},
      {x: 3, y: 10},
      {x: 4, y: 9}
    ]}/>
  <LineSeries
    style={{
      strokeDasharray: '2 2'
    }}
    data={[
      {x: 1, y: 8},
      {x: 2, y: 10},
      {x: 3, y: 3},
      {x: 4, y: 11}
    ]}
    strokeDasharray="7, 3"
    />
  <LineSeries
    color="orange"
    data={[
      {x: 1, y: 5},
      {x: 2, y: 9},
      {x: 3, y: 6},
      {x: 4, y: 8}
    ]}/>
</XYPlot>
```
