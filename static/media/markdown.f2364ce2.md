```js
import Snackbar from '@material-ui/core/Snackbar';

const fn = () => null;

<Snackbar
  anchorOrigin={{
    vertical: 'top | bottom',
    horizontal: 'left | center | right',
  }}
  open={true | false}
  autoHideDuration={5000}
  onClose={fn}
  message={
    Your notification message goes here
  }
/>

```
