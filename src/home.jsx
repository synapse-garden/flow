import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from './action-creators'

class Home extends React.component {
    var { AppTime, TotalClicks } = this.props
    clickRefreshButton(){
        this.props.dispatch(actionCreators.updateClicks())
        this.props.dispatch(actionCreators.refreshTime())
    }
    render () {
        return (
            <h1>State Time</h1><br>
            <h2>${AppTime}</h2><br>
            <button
                onClick={() => this.clickRefreshButton()}>
                Refresh State Time
            </button><br>
            <h3>Total Clicks: ${TotalClicks}</h3>
        )
    }
}
