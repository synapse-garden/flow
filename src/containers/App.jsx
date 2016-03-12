import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

import * as init from '../actions/init'
import TodoLists from '../components/TodoLists'


var App = React.createClass({

    componentDidMount() {
        $.get('api/all/', (data) => {
            this.props.dispatch( init.initFilters( data[0] ) )
            this.props.dispatch( init.initObjects( data[1] ) )
            this.props.dispatch( init.initUsers(   data[2] ) )
        })
        .done( _ => {
            this.props.dispatch( init.finishLoading() )
        })
    },

    render(){
        if( !this.props.loaded ){
            return <div>—  Loading  —</div>
        }
        else{ return(<div>

            <TodoLists
                title = "Todo Lists"
            />

        </div>)}
    }
})

const mapStateToProps = (state, props) => {
    return {
        loaded: state.app.loaded
    }
}

export default connect(mapStateToProps, null)(App)
