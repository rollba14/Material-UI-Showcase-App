```js
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const fn = (event,expanded) => {}

<ExpansionPanel
  expanded={'true | false'}
  onChange={fn}
>
  <ExpansionPanelSummary>
    A TITLE OR SUMMARY FOR THIS PANEL
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    ALL OF YOUR PANEL DETAILS
  </ExpansionPanelDetails>
</ExpansionPanel>

```
