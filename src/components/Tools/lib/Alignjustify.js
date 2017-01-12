/**
 * @file 两侧对齐
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
class Alignjustify extends React.Component {
  render() {
    return (
        <Base
          clickHandler={this.props.actions.alignJustify}
          icon='align-justify'
          tips='ALIGN_JUSTIFY_TIPS'
          border='none'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alignjustify)