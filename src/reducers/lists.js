// Initialize undefined state
var initialState = []

// Task reducer just handles single task requests, usually passed down
// from the lists reducer, but isn't called directly from outside the file.
const task = (state, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'TOGGLE_TODO':
            if( state.id !== action.taskId ){ return state }
            return{
                ...state,
                complete: !state.complete
            }
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

const list = (state, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'TOGGLE_TODO':
            if( state.id !== action.listId ){ return state }
            return{
                ...state,
                tasks: state.tasks.map(t => task(t, action))
            }
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Entry reducer function body with initial state and action input
const lists = (state = initialState, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'TOGGLE_TODO': return[
            ...state,
            state.map(l => list(l, action))
        ]

        // Sets the new lists state to the entirety of the incoming data
        case 'GET_LISTS': return(
            action.data
        )

        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the entry reducer
export default lists
