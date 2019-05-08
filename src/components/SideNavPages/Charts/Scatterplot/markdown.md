```js
import {
    XYPlot, MarkSeries,
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
  <MarkSeries
     data={[
       {
         x: 15.07701776924299,
         y: 13.148711736360678
       },
       {
         x: 4.2213660435955624,
         y: 10.755779193290609
       },
       {
         x: 10.8885611452339,
         y: 7.73601126628626
       }
     ]}
  />
</XYPlot>

```
