import React from 'react';
import Tips from '../../Tips';
import * as Actions from '../../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class ToolBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opacity: 0}
  }
  mouseLeaverHandler = () => {
    this.setState({
      opacity: 0
    })
  }
  mouseOverHandler = ()=> {
    this.setState({
      opacity: 1
    })
  }
  clickHandler = () => {
    if(this.props.role) {
      document.execCommand(this.props.role);
    }
  }
  render() {
    let actions = this.props.actions;
    let tools = this.props.actionState.tools.activeTools;
    let active = '';
    // tools.find((val) => {
    //   if(val === this.props.role.toUpperCase()) {
    //     active = 'vania-tools-active'
    //   }
    // })
    let textSpan = null;
    if (typeof this.props.text !== 'undefined') {
      textSpan = <span className='vania-tools-desc'>{this.props.text}</span>
    }
    let clazz = typeof this.props.className === 'undefined' ? '' : 'vania-tools-' + this.props.className;
    return (
      <a href='#' className={'vania-tools ' + clazz + active} 
         onMouseOver={this.mouseOverHandler} 
         onMouseLeave={this.mouseLeaverHandler} 
         ref='tool'
         style={{fontSize: this.props.size + 'rem', outline: this.props.border, color: this.props.style}} 
         onClick={actions.toolClick}>
        {textSpan}
        <i className={'fa fa-'+this.props.icon}></i>
        {/*
        <Tips position={this.props.position} 
              text={this.props.text} 
              opacity={this.state.opacity}
        />*/}
      </a>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBase)