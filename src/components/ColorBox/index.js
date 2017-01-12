import React from 'react';
import Base from '../Tools/lib/Base';
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
require('./colorBox.scss');
const colors = require('../../constants/ColorBox.json');

class ColorBox extends React.Component {
  render = () => {
    let paints = colors.map( (item, index) => {
      return (
        <li ref='fontColor' key={'paint_' + index}>
          <Base tips={item.tips} 
                bgColor={item.background}
                clickHandler={this.props.actions.backColor.bind(this, item.background)}
          />
        </li>
      )
    })
    return (
        <ul className='vania-paints-container'>
          {paints}
        </ul>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorBox)