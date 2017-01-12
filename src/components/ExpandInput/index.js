import React from 'react';
import i18n from '../../i18n';
require('./expandInput.scss');
export default class ExpandInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50
    }
  }
  inputHandler = () => {
    //TODO
    //区分中英文字符
    // let reg = new RegExp('[\\u4E00-\\u9FFF]|[^\x00-\xff]+', 'g'),
    let val = this.refs.expandInput.value,
        len = val.length;
        
    this.setState({
      width: len * 20
    })
  }
  render() {
    return (
      <span>
        <input ref='expandInput' 
               style={{width: this.state.width + 'px'}} 
               className='vania-expandInput' 
               placeholder={i18n.TITLE_PLACEHOLDER} 
               onInput={this.inputHandler}
        />
      </span>  
    )
  }
}