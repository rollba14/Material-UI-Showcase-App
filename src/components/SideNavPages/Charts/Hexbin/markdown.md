```js
import {
  XYPlot, XAxis, YAxis,
  HexbinSeries,
  } from 'react-vis';

<XYPlot
  yDomain={[35, 100]}
  xDomain={[1.2, 5.5]}
>
  <XAxis />
  <YAxis />
  <HexbinSeries
   radius={15}
   data={MyData}
  />
</XYPlot>
```
