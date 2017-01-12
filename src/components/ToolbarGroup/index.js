import React from 'react'
import { Bold, Italic, Underline, Strikethrough, Ol, Ul, Checkbox, 
        Insert, Font, Indent, Outdent, Align } from '../Tools'
require('./toolbarGroup.scss');

export default class ToolbarGroup extends React.Component {
  render() {
    return (
      <div className='vania-toolbar'>
        <ul>
          <li><Bold/></li>
          <li><Italic/></li>
          <li><Underline/></li>
          <li><Strikethrough/></li>
          <li><Ol/></li>
          <li><Ul/></li>
          <li><Checkbox/></li>
          <li><Font/></li>
          <li><Insert/></li>
          <li><Indent/></li>
          <li><Outdent/></li>
          <li><Align/></li>
        </ul>
      </div>
    )
  }
}