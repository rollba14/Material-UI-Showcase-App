const initState= {
  anchorEl: null,
  items: [
    {
      link: "https://www.yahoo.com/",
      name: "Yahoo",
    },
    {
      link: "https://www.google.com/",
      name: "Google",
    },
    {
      link: "https://www.bing.com/",
      name: "Bing",
    },
  ]
}

const rightItemMenu = (
  state=initState,
  action
) => {
  switch(action.type){
    case 'OPEN_RIGHT_ITEM_MENU':
      return {
        ...state,
        anchorEl: action.anchorEl,
      }
    case 'CLOSE_RIGHT_ITEM_MENU':
      return {
        ...state,
        anchorEl: null,
      }
    default:
      return state;
  }
}

export default rightItemMenu
