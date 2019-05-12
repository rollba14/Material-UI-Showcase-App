const rootReducer = (
  state={
    toggleSidebar: false
  },
  action
)=>{
  switch(action.type){
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      }
    default:
      return state;
  }
}

export default rootReducer;
