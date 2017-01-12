/**
 * @file 代码块
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
class Code extends React.Component {
  render() {
    return (
        <Base
          icon='file-code-o'
          border='none'
          desc='代码块'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code)