import React from 'react';
import ToolBase from './toolBase';
export default class Undo extends React.Component {
  render() {
    return (
      <ToolBase icon={'rotate-left'} size={this.props.size} style={this.props.style}/>
    )
  }
}