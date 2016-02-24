import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from './action-creators'

class App extends React.Component {
    render () {
    var { state } = this.props
    return (<div>
        <h1>Task Lists</h1>
        <h2>{appTime}</h2><br />
        <a
            onClick={() => this.clickRefreshButton()}
            className="button no-text-select">
            Update State Time
        </a><br />
    </div>)
    }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    state
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
