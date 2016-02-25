import React, {PropTypes} from 'react'
//import { connect } from 'react-redux'

const ListsViewer = ({ lists }) => (<div>

    <h1>Todo Lists</h1>

    <ul>
        {this.props.lists.map( list =>
            <li key={list.id}>
                {list.title}

            </li>
        )}
    </ul>

</div>)

// Define property types
ListsViewer.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
}

// Expose relevant state tree branches as props
const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

// ?? lol
const mapDispatchToProps = (dispatch) => {
  return {
    //onTodoClick: (id) => {
    //  dispatch(toggleTodo(id))
    //}
  }
}

// const ListsViewer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default ListsViewer
