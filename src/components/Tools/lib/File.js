import React from 'react';
import ToolBase from './toolBase';
export default class File extends React.Component {
  render() {
    return (
      <ToolBase 
        icon={'file-o'} 
        size={this.props.size} 
        role={'file'}
        border={'none'}
        style={this.props.style}
      />
    )
  }
}