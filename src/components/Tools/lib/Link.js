/**
 * @file 超链接
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
class Link extends React.Component {
  render() {
    return (
        <Base
          icon='link'
          border='none'
          desc='超链接'
        />
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)