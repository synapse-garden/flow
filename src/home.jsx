import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from './action-creators'

class Home extends React.Component {
    clickRefreshButton(){
        this.props.dispatch(actionCreators.updateClicks())
        this.props.dispatch(actionCreators.refreshTime())
    }
    render () {
    var { appTime, totalClicks } = this.props
    return (<div>
        <h1>State Time</h1>
        <h2>{appTime}</h2><br />
        <a
            onClick={() => this.clickRefreshButton()}
            className="button no-text-select">
            Update State Time
        </a><br />
        <p>Total Clicks: {totalClicks}</p>
    </div>)
    }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    appTime: state.mainReducer.appTime,
    totalClicks: state.mainReducer.totalClicks,
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
