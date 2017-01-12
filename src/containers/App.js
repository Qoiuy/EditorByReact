import React from 'react'
import Header from '../components/Header'
import ContentEditor from '../components/ContentEditor';
require('normalize.css');
require('font-awesome/css/font-awesome.min.css');
require('../styles/App.scss');

// import * as Actions from '../../../actions'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Actions, dispatch)
// })
// const mapStateToProps = state => ({
//   actionState: state
// })
class App extends React.Component {
  render = () => {
    return (
      <div className='vania-container'>
        <header className='vania-header'>
          <Header/>
        </header>
        <section className='vania-section'>
          <ContentEditor/>
        </section>
      </div>
    )
  }
}
export default App;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ToolBase)
