// Create entry reducer function body with initial state and action input
const users = (state = [], action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'A':
            return{
                state
            }

        // Sets the new users state to the entirety of the incoming data
        case 'PUSH_USERS': return(
            action.data
        )
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the entry function
export default users
