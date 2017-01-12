/**
 * @file 粗体按键
 */
import React from 'react';
import * as Actions from '../../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Base from './Base';
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})
class Checkbox extends React.Component {
  render() {
    return (
      <Base
        active={this.props.actionState.tools.activeTools['CHECKBOX'] ? 'vania-tools-active' : ''}
        clickHandler={this.props.actions.checkbox}
        icon='check-square-o'
        tips='CHECKBOX_TIPS'
      />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox)