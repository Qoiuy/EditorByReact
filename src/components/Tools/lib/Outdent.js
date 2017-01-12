/**
 * @file 减少缩进
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
class Outdent extends React.Component {
  render() {
    return (
        <Base
          clickHandler={this.props.actions.outdent}
          icon='outdent'
          tips='OUTDENT_TIPS'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Outdent)