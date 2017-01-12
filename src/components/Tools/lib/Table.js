/**
 * @file 表格
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
class Table extends React.Component {
  render() {
    return (
        <Base
          icon='table'
          border='none'
          desc='表格'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)