import React from 'react';
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
require('./itemList.scss')
class ItemList extends React.Component {
  render = () => {
    let items = [];
    for (let item of this.props.items) {
      items = [...items, <li>{item}</li>]
    }
    return (
        <ul className='vania-itemList-container clearfix'>
          {items}
        </ul>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)