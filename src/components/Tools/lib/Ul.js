/**
 * @file 无序列表
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
class Ul extends React.Component {
  render() {
    return (
      <Base
        active={this.props.actionState.tools.activeTools['InsertUnorderedList'] ? 'vania-tools-active' : ''}
        clickHandler={this.props.actions.insertUnorderedList}
        icon='list-ul'
        tips='UL_TIPS'
      />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ul)