import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/application'

class AboutView extends Component {
  static propTypes = {
    application: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.actions.setPageTitle('About')
  }

  render () {
    return (
      <div>
        About
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  application: state.application
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutView)