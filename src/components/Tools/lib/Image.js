/**
 * @file 图片
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
class Image extends React.Component {
  changeHandler = () => {
    let reader = new FileReader();  
    //将文件以Data URL形式读入页面  
    let action = this.props.actions.insertImage;
    reader.readAsDataURL(this.refs.img.files[0]); 
    reader.onload = (e) => {
      this.props.actions.insertImage(e.target.result)
    }
  }
  render() {
    return (
        <Base
          icon='picture-o'
          border='none'
          desc='图片'
        >
          <input type='file'
                 ref='img'
                 onChange={this.changeHandler} 
                 style={{position: 'absolute', opacity: 0, width: '150px', 
                         left: 0, height: '1.2em'}}/>
        </Base>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image)