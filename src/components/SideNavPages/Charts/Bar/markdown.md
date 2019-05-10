```js
import {
    XYPlot, HorizontalBarSeries,
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
  <XAxis />
  <YAxis />
  <HorizontalBarSeries
  data=[
      {
        x: 10,
        y: 0
      },
      {
        x: 11.077792409917427,
        y: 1
      },
      {
        x: 10.8253430474924,
        y: 2
      },
      {
        x: 8.316423721676621,
        y: 3
      },
      {
        x: 9.015041420903938,
        y: 4
      },
      {
        x: 12.760252623908936,
        y: 5
      },
      {
        x: 10.206552688134733,
        y: 6
      },
      {
        x: 12.00754345141172,
        y: 7
      },
      {
        x: 11.334025519982529,
        y: 8
      }
    ];
  />
</XYPlot>
```
