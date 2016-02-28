import React from 'react'
import { connect } from 'react-redux'
import ObjectList from './ObjectList'

// Main Body
const TodoLists = ({
    // Input Variables
    lists,
    title,
    count,
    user

}) => (<div className = "popout">

            <h2>{user}'s {title}</h2>
            <h4>Total Tasks: {count}</h4>
            {/*<ul>{lists.map( list =>
                <li key={list.id}>{list.title}</li>
            )}</ul>*/}

        </div> )
//

const mapStateToProps = (state, props) => {
    return {
        lists: state.lists,
        //lists: [{title: "grump", id: 0}, {title: "grumpadump", id: 1}],
        title: props.title,
        count: state.totalTaskCount,
        user: state.user
    }
}

const ConnectedTodoLists = connect(mapStateToProps, null)(TodoLists)

export default ConnectedTodoLists
