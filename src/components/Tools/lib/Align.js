/**
 * @file 对齐
 */
import React from 'react';
import * as Actions from '../../../actions'
import Base from './Base';
import ItemList from '../../ItemList';
import { Aligncenter, Alignjustify, Alignleft, Alignright } from '../../Tools';
import DropdownList from '../../DropdownList';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class Align extends React.Component {
  constructor() {
    super();
  }
  clickHandler = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.props.actions.alignList();
    document.addEventListener('click', this.blurHandler)
  }
  blurHandler = () => { 
    this.props.actions.other();
  }
  render() {
    let isShow = this.props.actionState.dropdownList.alignList;
    return (
          <Base
            textIcon='align-justify'
            icon='angle-down'
            tips='ALIGN_TIPS'
            clickHandler={this.clickHandler}
            >
            <DropdownList isShow={isShow}>
              <ItemList items={[<Alignleft/> , <Aligncenter/>, 
                <Alignright/> , <Alignjustify/>]}/>
            </DropdownList>
          </Base>  
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Align)