/**
 * @file 附件
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
class Paperclip extends React.Component {
  render() {
    return (
        <Base
          icon='paperclip'
          border='none'
          desc='附件'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paperclip)