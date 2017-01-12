import React from 'react';
import Tips from '../../Tips';
import * as Tips_Text from '../../../constants/TipsTypes';
require('../tools.scss');
export default class Base extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: false
    }
  }
  onMouseoverHandler = () => {
    this.setState({
      isShow: true
    })
  }
  onMouseleaveHandler = () => {
    this.setState({
      isShow: false
    })
  }
  tips = () => {
    if (this.state.isShow && this.props.tips) {
      return (
        <Tips text={Tips_Text[this.props.tips] || this.props.tips} position={this.props.tipsPosition}/>
      )
    }
  }
  icon = () => {
    if(this.props.icon) {
      return (
        <i className={'fa fa-' + this.props.icon}></i>
      )
    }
  }
  text = () => {
    if(this.props.text) {
      return (
        <span className='vania-tools-text'>{this.props.text}</span>
      )
    }
  }
  textIcon = () => {
    if(this.props.textIcon) {
      return (
        <i className={'vania-tools-textIcon fa fa-' + this.props.textIcon}></i>
      )
    }
  }
  desc = () => {
    if(this.props.desc) {
      return (
        <span className='vania-tools-desc'>{this.props.desc}</span>
      )
    }
  }
  render = () => {
    const clsName = [
      'vania-tools',
      this.props.className || '',
      this.props.active || ''
    ].join(' ');                      
    return (
        <span>
          <a 
            tabIndex='-1'
            onMouseOver={this.onMouseoverHandler}
            onMouseLeave={this.onMouseleaveHandler}
            href='#' className={clsName} 
            ref='tool'
            style={{fontSize: this.props.size + 'rem', 
                    outline: this.props.border, 
                    color: this.props.style,
                    backgroundColor: this.props.bgColor}} 
            onClick={this.props.clickHandler}>
            {this.text()}
            {this.textIcon()}
            {this.icon()}
            {this.desc()}
            {this.tips()}
          </a>
          {this.props.children}
        </span>
    )
  }
}