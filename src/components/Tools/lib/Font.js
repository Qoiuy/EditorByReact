/**
 * @file 字体颜色
 */
import React from 'react';
import * as Actions from '../../../actions'
import Base from './Base';
import DropdownList from '../../DropdownList';
import ColorBox from '../../ColorBox';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class Font extends React.Component {
  clickHandler = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.props.actions.fontList();
    document.addEventListener('click', this.blurHandler)
  }
  blurHandler = () => { 
    this.props.actions.other();
  }
  render() {
    return (
          <Base
            icon='font'
            tips='FONT_TIPS'
            clickHandler={this.clickHandler}
            >
            <DropdownList isShow={this.props.actionState.dropdownList.fontList}>
              <ColorBox/>
            </DropdownList>
          </Base>  
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Font)