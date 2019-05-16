const toggleCollapsableItem = (newLabel)=>{
  return{
    type: "TOGGLE_COLLAPSABLE_ITEM",
    label: newLabel,
  }
};

const toggleSidebar = ()=>{
  return{
    type: "TOGGLE_SIDEBAR",
  }
};

const openRightItemMenu = (event)=>{
  return {
    type:"OPEN_RIGHT_ITEM_MENU",
    anchorEl: event.currentTarget,
  }
};

const closeRightItemMenu = () =>{
  return {
    type:"CLOSE_RIGHT_ITEM_MENU",
  }
}

export default {
  toggleCollapsableItem, toggleSidebar, openRightItemMenu, closeRightItemMenu,
}
