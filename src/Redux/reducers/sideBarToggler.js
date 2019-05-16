import {ActionType} from '../actions'

const initState = {
  openSideBar: true
}

const sideBarToggler = (
  state = initState,
  action
)=>{
  switch(action.type){
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        openSideBar: !state.openSideBar,
      }
    default:
      return state;
  }
}

export default sideBarToggler;
