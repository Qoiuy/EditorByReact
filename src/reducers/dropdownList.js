

const initialState = {
  fontList: false,
  titleList: false,
  colorList: false,
  insertList : false,
  alignList: false
}
export default function dropdownList(state = initialState, action) {
  let result = {};
  switch (action.type) {
    case 'titleList':
      for (let key in state) {
        result[key] = key === 'titleList' ? !state.titleList : false;
      }
      return result;
    case 'fontList':
      for (let key in state) {
        result[key] = key === 'fontList' ? !state.fontList : false;
      }
      return result;
    case 'insertList':
      for (let key in state) {
        result[key] = key === 'insertList' ? !state.insertList : false;
      }
      return result;
    case 'alignList':
      for (let key in state) {
        result[key] = key === 'alignList' ? !state.alignList : false;
      }
      return result;
    case 'other':
      for (let key in state) {
        result[key] = false;
      }
      return result;
    default:
      return state;
  }
}