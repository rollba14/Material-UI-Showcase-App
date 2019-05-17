import {ActionType} from '../actions'

const BASE_URL = '/';

const sideBarState = {
  navItems: [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'Home'
    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'Palette'
    },
    {
      label: 'Components',
      url: BASE_URL + 'components',
      icon: 'Widgets',
      subNavItems: [
        {
          label: 'Avatar',
          url: BASE_URL + 'components/avatar',
          icon: 'NavigateNext'
        },
        {
          label: 'Badge',
          url: BASE_URL + 'components/badge',
          icon: 'NavigateNext'
        },
        {
          label: 'Button',
          url: BASE_URL + 'components/button',
          icon: 'NavigateNext'
        },
        {
          label: 'Card',
          url: BASE_URL + 'components/card',
          icon: 'NavigateNext'
        },
        {
          label: 'Dialog',
          url: BASE_URL + 'components/dialog',
          icon: 'NavigateNext'
        },
        {
          label: 'ExpansionPanel',
          url: BASE_URL + 'components/expansion-panel',
          icon: 'NavigateNext'
        },
        {
          label: 'MessageBar',
          url: BASE_URL + 'components/messagebar',
          icon: 'NavigateNext'
        },
        {
          label: 'Notification',
          url: BASE_URL + 'components/notification',
          icon: 'NavigateNext'
        },
        {
          label: 'Pickers',
          url: BASE_URL + 'components/pickers',
          icon: 'NavigateNext'
        },
        {
          label: 'Progress',
          url: BASE_URL + 'components/progress',
          icon: 'NavigateNext'
        },
        {
          label: 'Spinner',
          url: BASE_URL + 'components/spinner',
          icon: 'NavigateNext'
        },
        {
          label: 'Table',
          url: BASE_URL + 'components/table',
          icon: 'NavigateNext'
        },
        {
          label: 'Tabs',
          url: BASE_URL + 'components/tabs',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'Timeline',
      subNavItems: [
        {
          label: 'Area',
          url: BASE_URL + 'charts/area',
          icon: 'NavigateNext'
        },
        {
          label: 'Bar',
          url: BASE_URL + 'charts/bar',
          icon: 'NavigateNext'
        },
        {
          label: 'Hexbin',
          url: BASE_URL + 'charts/hexbin',
          icon: 'NavigateNext'
        },
        {
          label: 'Line',
          url: BASE_URL + 'charts/line',
          icon: 'NavigateNext'
        },
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext'
        },
        {
          label: 'Scatterplot',
          url: BASE_URL + 'charts/scatterplot',
          icon: 'NavigateNext'
        },
        {
          label: 'Stacked Bar',
          url: BASE_URL + 'charts/stackbar',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Iconography',
      url: BASE_URL + 'icons',
      icon: 'BlurOn'
    }
  ],
  collapsableTogglers: {},
}

const sideBarItems = (
  state=sideBarState,
  action
) => {
  switch(action.type){
    case ActionType.TOGGLE_COLLAPSABLE_ITEM:
      let boolean = !state.collapsableTogglers[action.label];
      return{
        ...state,
        collapsableTogglers: {
          ...state.collapsableTogglers,
          [action.label]: boolean,
        }
      }
    default:
      return state;
  }
}

export default sideBarItems;
