import React from 'react'
import { Star, Back, File} from '../Tools'
import ExpandInput from '../ExpandInput'
require('./header.scss');

export default class Header extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <ul className='vania-header-list'>
          <li><Back size={.8}/></li>
          <li><File size={.8}/></li>
          <li><ExpandInput/></li>
          <li><Star size={.8}/></li>
          <li><span style={{fontSize: '12px'}}>今天 16:30 更新</span></li>
        </ul>
      </div>
    )
  }
}
