```js
import Chip from '@material-ui/core/Chip';
import * as Icons from '@material-ui/core/icons';

const fn = () => null;

<div>
  <Chip
    icon={<Icons.SentimentSatisfiedAltRounded />}
    label="Blue Chip"
    clickable
    color="primary"
    onDelete={fn}
    deleteIcon={<Icons.ExpandMore />}
  />
</div>

```
