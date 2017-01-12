import React from 'react'

import dropList from './dropdownList.scss';

export default class DropdownList extends React.Component {
  constructor (...props) {
    super(...props);
  }
  render() {
    let isShow = this.props.isShow ? 'block' : 'none';
    return (
      <div className='vania-dropdownList' 
            ref='dropList' 
            style={{display: isShow}}>
        {this.props.children}
        <div className='vania-dropdownList-arrow'></div>
      </div>
    )
  }
  componentDidUpdate = () => {
    let width = this.refs.dropList.offsetWidth;
    let pWidth = this.refs.dropList.parentNode.offsetWidth; 
    this.refs.dropList.style.marginLeft = '-' + (width-pWidth)/2 + 'px';
  }
}
