import React from 'react';
require('./tips.scss');


class Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: '4em'
    }
  }
  render = () => {
    let opts = {text: typeof this.props.text === 'undefined' ? '' : this.props.text,
                position: typeof this.props.position === 'undefined' ? 'top' : this.props.position };     
    return (
      <div className='vania-tips' ref='tips' style={{marginLeft: this.state.marginLeft}}>
        {opts.text}
        <div className={'vania-tips-arrow ' + opts.position + 'Arrow'}></div>
      </div>
    )
  }
  componentDidMount = () => {
    let width = this.refs.tips.offsetWidth;
    this.setState({
      marginLeft: '-' + Math.floor(width/2) + 'px'
    })
  }
}

export default Tips;