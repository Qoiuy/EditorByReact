/**
 * @file 标题
 */
import React from 'react';
import * as Actions from '../../../actions'
import Base from './Base';
import DropdownList from '../../DropdownList';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class Title extends React.Component {
  constructor() {
    super();
    this.state= {
      title: '普通'
    }
  }
  clickHandler = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.props.actions.titleList();
    document.addEventListener('click', this.blurHandler)
  }
  blurHandler = () => { 
    this.props.actions.other();
  }
  render() {
    let isShow = this.props.actionState.dropdownList.titleList;
    return (
          <Base
            text={this.state.title}
            icon='angle-down'
            tips='TITLE_TIPS'
            clickHandler={this.clickHandler}
            >
            <DropdownList isShow={this.props.actionState.dropdownList.titleList}>
              12345
            </DropdownList>
          </Base>  
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title)