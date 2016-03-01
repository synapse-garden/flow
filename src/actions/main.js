// Action Creators are where primary processing logic goes.
// They pass their results as simple inputs to the reducers

export const toggleTodo = (listId, taskId) => {
    return{
        type: 'TOGGLE_TODO',
        listId: listId,
        taskId: taskId
    }
}
