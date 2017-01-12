import * as actionTypes from '../constants/ToolTypes';
import Immutable from 'immutable';

const initialState = {
  activeTools: {
    BOLD: false,
    ITALIC: false,
    UNDERLINE: false,
    STRIKETHROUGH: false,
    InsertOrderedList: false,
    InsertUnorderedList: false,
    InsertInputCheckbox: false
  }
}
export default function tools(state = initialState, action) {
  let result = Immutable.fromJS(state);
  document.execCommand(action.type, false, action.params);
  switch (action.type) {
    case actionTypes.BOLD:
      return result.updateIn(['activeTools', 'BOLD'], value => !value).toJS();
    case actionTypes.ITALIC:
      return result.updateIn(['activeTools', 'ITALIC'], value => !value).toJS();
    case actionTypes.UNDERLINE:
      return result.updateIn(['activeTools', 'UNDERLINE'], value => !value).toJS();
    case actionTypes.STRIKETHROUGH:
      return result.updateIn(['activeTools', 'STRIKETHROUGH'], value => !value).toJS();
    case actionTypes.InsertOrderedList:
      return result.updateIn(['activeTools', 'InsertOrderedList'], value => !value)
                   .updateIn(['activeTools', 'InsertUnorderedList'], () => false).toJS();
    case actionTypes.InsertUnorderedList:
      return result.updateIn(['activeTools', 'InsertOrderedList'], () => false)
                   .updateIn(['activeTools', 'InsertUnorderedList'], value => !value).toJS();
    case actionTypes.InsertInputCheckbox:
      alert('这个我真的没找到API');
      return result.updateIn(['activeTools', 'InsertInputCheckbox'], value => !value).toJS();
    case actionTypes.CHECK:
      let tools = {};
      for(let key in actionTypes) {
        tools[key] = document.queryCommandState(key) ? true : false;
      }
      return {activeTools: tools}; 
    case actionTypes.TITLE:
      return result.updateIn(['activeTools', 'UNDERLINE'], value => !value).toJS();  
    default:
      return state;
  }
}