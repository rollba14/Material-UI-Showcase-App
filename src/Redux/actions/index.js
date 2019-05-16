export const ActionType = {
  TOGGLE_COLLAPSABLE_ITEM: "TOGGLE_COLLAPSABLE_ITEM",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  OPEN_RIGHT_ITEM_MENU: "OPEN_RIGHT_ITEM_MENU",
  CLOSE_RIGHT_ITEM_MENU:
  "CLOSE_RIGHT_ITEM_MENU",
};

export const toggleCollapsableItem = (newLabel)=>{
  return{
    type: ActionType.TOGGLE_COLLAPSABLE_ITEM,
    label: newLabel,
  }
};

export const toggleSidebar = ()=>{
  return{
    type: ActionType.TOGGLE_SIDEBAR,
  }
};

export const openRightItemMenu = (event)=>{
  return {
    type: ActionType.OPEN_RIGHT_ITEM_MENU,
    anchorEl: event.currentTarget,
  }
};

export const closeRightItemMenu = () =>{
  return {
    type: ActionType.CLOSE_RIGHT_ITEM_MENU,
  }
};
