const rootReducer = (
  state={
    openSideBar: false
  },
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

export default rootReducer;
