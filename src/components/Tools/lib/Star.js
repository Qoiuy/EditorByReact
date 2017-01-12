import React from 'react';
import ToolBase from './toolBase';
export default class Star extends React.Component {
  render() {
    return (
      <ToolBase 
        icon={'star'} 
        size={this.props.size} 
        role={'star'}
        border='none'
        style={this.props.style}
      />
    )
  }
}