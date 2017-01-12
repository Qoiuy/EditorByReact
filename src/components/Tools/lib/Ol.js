/**
 * @file 有序列表按键
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
class Ol extends React.Component {
  render() {
    return (
      <Base
        active={this.props.actionState.tools.activeTools['InsertOrderedList'] ? 'vania-tools-active' : ''}
        clickHandler={this.props.actions.insertOrderedList}
        icon='list-ol'
        tips='OL_TIPS'
      />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ol)