import { combineReducers } from 'redux'
import sideBarToggler from './sideBarToggler.js'
import rightItemMenu from './rightItemMenu.js'
import sideBarItems from './sideBarItems.js'

const rootReducer = combineReducers({
  sideBarItems,
  sideBarToggler,
  rightItemMenu,
})

export default rootReducer;
