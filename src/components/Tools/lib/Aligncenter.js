/**
 * @file 居中对齐
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
class Aligncenter extends React.Component {
  render() {
    return (
        <Base
          clickHandler={this.props.actions.alignCenter}
          icon='align-center'
          tips='ALIGN_CENTER_TIPS'
          border='none'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aligncenter)