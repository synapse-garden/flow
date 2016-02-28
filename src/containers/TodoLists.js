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
            <ul>{lists.map( list =>
                <li key={list.id}
                    className="header">
                    {list.title}

                    <ol>{list.tasks.map( task =>
                        <li key={task.id}>
                            {task.title}
                        </li>
                    )}</ol><br />
                </li>
            )}</ul>

        </div> )
//

const mapStateToProps = (state, props) => {
    return {
        lists: state.lists.lists,
        //lists: [{title: "grump", id: 0}, {title: "grumpadump", id: 1}],
        title: props.title,
        count: state.lists.totalTaskCount,
        user: state.app.user
    }
}

const ConnectedTodoLists = connect(mapStateToProps, null)(TodoLists)

export default ConnectedTodoLists
