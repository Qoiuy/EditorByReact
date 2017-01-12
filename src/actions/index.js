import * as types from '../constants/ToolTypes';

export const bold = () => ({type: types.BOLD});
export const italic = () => ({type: types.ITALIC});
export const underline = () => ({type: types.UNDERLINE});
export const check = () => ({type: types.CHECK});
export const strikethrough = () => ({type: types.STRIKETHROUGH});
export const insertOrderedList = () => ({type: types.InsertOrderedList});
export const insertUnorderedList = () => ({type: types.InsertUnorderedList});
export const checkbox = () => ({type: types.InsertInputCheckbox});
export const title = () => ({type: types.Title});
export const backColor = (color) => ({type: types.ForeColor, params: color});
export const insertImage = (url) => ({type: types.InsertImage, params: url});
export const indent = () => ({type: types.INDENT})
export const outdent = () => ({type: types.OUTDENT})
export const alignCenter = () => ({type: types.JustifyCenter})
export const alignLeft = () => ({type: types.JustifyLeft})
export const alignRight = () => ({type: types.JustifyRight})
export const alignJustify = () => ({type: types.Justify})

export const titleList = () => ({type: 'titleList'});
export const fontList = () => ({type: 'fontList'});
export const insertList = () => ({type: 'insertList'});
export const alignList = () => ({type: 'alignList'});
export const other = () => ({type: 'other'});
