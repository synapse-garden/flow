import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

import { initLists } from '../actions/init'
import { initUsers } from '../actions/init'

const InitApp = ({ pushLists, pushUsers }) => (<div>

    <a className="button"
       href="#"
       onClick={ _ => {
           $.get('api/lists/-1', (data) => { pushLists(data) } )
           $.get('api/users/-1', (data) => { pushUsers(data) } )
       } }
    >
        Initialize App State
    </a>

</div>)

const mapDispatchToProps = (dispatch) => {
    return{
        pushLists: (data) => { dispatch( initLists(data) ) },
        pushUsers: (data) => { dispatch( initUsers(data) ) }
    }
}

export default connect(null,mapDispatchToProps)(InitApp)
