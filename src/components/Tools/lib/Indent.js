/**
 * @file 增加缩进
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
class Indent extends React.Component {
  render() {
    return (
        <Base
          clickHandler={this.props.actions.indent}
          icon='indent'
          tips='INDENT_TIPS'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Indent)