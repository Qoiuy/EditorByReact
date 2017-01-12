import React from 'react';
import ToolBase from './toolBase';
export default class Back extends React.Component {
  render() {
    return (
      <ToolBase icon={'chevron-left'} size={this.props.size} style={this.props.style} role={'back'} border={'none'}/>
    )
  }
}