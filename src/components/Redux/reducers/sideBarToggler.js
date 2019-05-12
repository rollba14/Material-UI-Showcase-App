const initState = {
  openSideBar: false
}

const sideBarToggler = (
  state = initState,
  action
)=>{
  switch(action.type){
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        openSideBar: !state.openSideBar,
      }
    default:
      return state;
  }
}

export default sideBarToggler;
