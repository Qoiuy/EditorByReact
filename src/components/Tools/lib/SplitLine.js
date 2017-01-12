/**
 * @file 分割线
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
class SplitLine extends React.Component {
  render() {
    return (
        <Base
          icon='minus'
          border='none'
          desc='分隔线'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplitLine)