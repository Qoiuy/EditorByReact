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
class Strikethrough extends React.Component {
  render() {
    return (
      <Base
        active={this.props.actionState.tools.activeTools['STRIKETHROUGH'] ? 'vania-tools-active' : ''}
        clickHandler={this.props.actions.strikethrough}
        icon='strikethrough'
        tips='STRIKETHROUGH_TIPS'
      />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Strikethrough)