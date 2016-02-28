// Load state from external source
import initialState from '../init/initTasks'

// Create entry reducer function body with initial state and action input
const lists = (state = initialState, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'A':
            return{
                state
            }
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the entry function
export default lists
