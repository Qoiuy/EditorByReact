import { combineReducers } from 'redux';
import tools from './tools';
import dropdownList from './dropdownList'

const rootReducer = combineReducers({
  tools,
  dropdownList
})
export default rootReducer;