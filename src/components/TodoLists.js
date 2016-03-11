import React from 'react'
import { connect } from 'react-redux'

// Import Action Creators
import { toggleTodo } from '../actions/main'

// Main Body
const statusText = (status) => {
    if( status == true ) return "✔"
    else return ""
}

const sumTasks = (lists) => {
    let sum = 0
    lists.map( list => {
        sum = sum + list.tasks.length
    })
    return sum
}

const sumComplete = (lists) => {
    let sum = 0
    lists.map( list => {
        list.tasks.map( task => {
            if( task.complete ){ sum = sum + 1 }
        })
    })
    return sum
}

const TodoLists = ({
    // Variables from 'mapStateToProps'
    lists,
    title,
    count,
    completeCount,
    user,
    dispatch

}) => (<div className="popout">

    <h2>{user}'s {title}</h2>

    <h4>Total Tasks: {count}</h4>
    <h4>Tasks Complete: {completeCount} </h4>

    <div>{lists.map( list =>
        <div key={list.id}
            className="popout">
            <h3>{list.title}</h3>

            <table>
            <thead className="todoList">
                <tr>
                <td className="todoSerial">#</td>
                <td className="todoStatus">Status</td>
                <td className="todoTitle">Task</td>
                <td className="todoDate">Due Date</td>
                </tr>
            </thead>
            <tbody>
            {list.tasks.map( task =>
                <tr key={task.id} className={task.complete.toString()}>
                    <td className="todoSerial">{task.id}</td>
                    <td className="todoStatus button no-text-select"
                    onClick={e => {dispatch(toggleTodo(list.id, task.id))}}>
                    {statusText(task.complete)}</td>
                    <td className="todoTitle">{task.title}</td>
                    <td className="todoDate">{task.dueDate} @ {task.dueTime}</td>
                </tr>
            )}
            </tbody>
            <tfoot></tfoot>
            </table>

        </div>
    )}</div>

</div> )
//

//
const mapStateToProps = (state, props) => {
    return {
        lists: state.lists,
        title: props.title,
        count: sumTasks(state.lists),
        completeCount: sumComplete(state.lists),
        user: state.users[0]
    }
}

export default connect(mapStateToProps)(TodoLists)
