import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

import TodoLists from '../components/TodoLists'

import { initLists } from '../actions/init'
import { initUsers } from '../actions/init'

var App = React.createClass({
    componentWillMount() {
        $.get('api/users/-1', (data) => { this.props.pushUsers(data) } )
        $.get('api/lists/-1', (data) => { this.props.pushLists(data) } )
    },
    render(){return(<div>

        <TodoLists
            title = "Todo Lists"
        />

    </div>)}
})

const mapDispatchToProps = (dispatch) => {
    return{
        pushLists: (data) => { dispatch( initLists(data) ) },
        pushUsers: (data) => { dispatch( initUsers(data) ) }
    }
}

export default connect(null,mapDispatchToProps)(App)
