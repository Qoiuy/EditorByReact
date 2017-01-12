import React from 'react';
import Base from './Base'
import * as Actions from '../../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})
class Italic extends React.Component {
  render() {
    let active = this.props.actionState.tools.activeTools['ITALIC'] ? 'vania-tools-active' : '';
    return (
      <Base
        active={active}
        clickHandler={this.props.actions.italic}
        icon='italic'
        tips='ITALIC_TIPS'
      />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Italic)