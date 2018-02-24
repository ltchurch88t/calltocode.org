import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectDetail extends Component {
  render () {
    return (
      <h1>This is a new page</h1>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentPage: state.routing.location.pathname
  }
}

export default connect(mapStateToProps, null)(ProjectDetail)
