/**
 * @file 右侧对齐
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
class Alignright extends React.Component {
  render() {
    return (
        <Base
          clickHandler={this.props.actions.alignRight}
          icon='align-right'
          tips='ALIGN_RIGHT_TIPS'
          border='none'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alignright)