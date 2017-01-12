import React from 'react'
import ToolbarGroup from '../ToolbarGroup'
require('./editor.scss');
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = state => ({
  actionState: state
})

class ContentEditor extends React.Component {
  render() {
    let actions = this.props.actions;
    return (
        <div className='vania-section-editor'>
          <div className='vania-section-editorToolbar'>
            <ToolbarGroup/>
          </div>
          <div className='vania-section-editorContent'>
            <div className='vania-section-editorTitle'>
              <input className='vania-section-editorTitleInput' spellCheck='false' placeholder='无标题'/>
            </div>
            <div onClick={actions.check}
                 className='vania-section-editorContext' 
                 spellCheck='false' 
                 contentEditable='true'>
            </div>
          </div>
        </div>   
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentEditor)
