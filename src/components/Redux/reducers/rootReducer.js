import { combineReducers } from 'redux'
import sideBarToggler from './sideBarToggler.js'
import rightItemMenu from './rightItemMenu.js'


const rootReducer = combineReducers({
  sideBarToggler,
  rightItemMenu
})

export default rootReducer;
