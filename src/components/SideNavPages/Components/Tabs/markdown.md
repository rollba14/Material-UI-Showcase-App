```js
import Tab from '@material-ui/core/Tab';

const { tabId } = this.state;

<Tabs
  value={tabId}
  onChange={this.handleTabChange}
  indicatorColor="primary"
  textColor="primary"
>
  <Tab label="Tabs Demo"/>
  <Tab label="Sample Usage"/>
</Tabs>

```
