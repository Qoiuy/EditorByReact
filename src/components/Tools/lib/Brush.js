import React from 'react';
import ToolBase from './toolBase';
export default class Brush extends React.Component {
  render() {
    return (
      <ToolBase icon={'paint-brush'} size={this.props.size} style={this.props.style}/>
    )
  }
}