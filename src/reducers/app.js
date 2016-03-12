const initialState = {
    loaded: false
}

// Create entry reducer function body with initial state and action input
const app = (state = initialState, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'FINISH_LOADING':
            return{
                ...state,
                loaded: true
            }
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the entry function
export default app
