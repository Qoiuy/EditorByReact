import React from 'react';
import ToolBase from './toolBase';
export default class Redo extends React.Component {
  render() {
    return (
      <ToolBase icon={'rotate-right'} size={this.props.size} style={this.props.style}/>
    )
  }
}