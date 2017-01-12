/**
 * @file 插入
 */
import React from 'react';
import * as Actions from '../../../actions'
import Base from './Base';
import ItemList from '../../ItemList';
import { Image , Table, Code , SplitLine, Paperclip, Link} from '../../Tools';
import DropdownList from '../../DropdownList';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class Insert extends React.Component {
  constructor() {
    super();
    this.state= {
      title: '插入'
    }
  }
  clickHandler = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    this.props.actions.insertList();
    document.addEventListener('click', this.blurHandler)
  }
  blurHandler = () => { 
    this.props.actions.other();
  }
  render() {
    let isShow = this.props.actionState.dropdownList.insertList;
    return (
          <Base
            text={this.state.title}
            icon='angle-down'
            clickHandler={this.clickHandler}
            >
            <DropdownList isShow={isShow}>
              <ItemList items={[<Image/> , <Table/>, 
                                <Code/> , <SplitLine/>, 
                                <Paperclip/>, <Link/>]}/>
            </DropdownList>
          </Base>  
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Insert)