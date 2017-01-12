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
class Bold extends React.Component {
  render() {
    return (
        <Base
          active={this.props.actionState.tools.activeTools['BOLD'] ? 'vania-tools-active' : ''}
          clickHandler={this.props.actions.bold}
          icon='bold'
          tips='BOLD_TIPS'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bold)