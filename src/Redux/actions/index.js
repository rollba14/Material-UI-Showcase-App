export const ActionType = {
  TOGGLE_COLLAPSABLE_ITEM: "TOGGLE_COLLAPSABLE_ITEM",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  OPEN_RIGHT_ITEM_MENU: "OPEN_RIGHT_ITEM_MENU",
  CLOSE_RIGHT_ITEM_MENU:
  "CLOSE_RIGHT_ITEM_MENU",
}

const toggleCollapsableItem = (newLabel)=>{
  return{
    type: ActionType.TOGGLE_COLLAPSABLE_ITEM,
    label: newLabel,
  }
};

const toggleSidebar = ()=>{
  return{
    type: ActionType.TOGGLE_SIDEBAR,
  }
};

const openRightItemMenu = (event)=>{
  return {
    type: ActionType.OPEN_RIGHT_ITEM_MENU,
    anchorEl: event.currentTarget,
  }
};

const closeRightItemMenu = () =>{
  return {
    type: ActionType.CLOSE_RIGHT_ITEM_MENU,
  }
}

export default {
  toggleCollapsableItem, toggleSidebar, openRightItemMenu, closeRightItemMenu,
}
