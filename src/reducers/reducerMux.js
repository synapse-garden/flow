// Import reducer combination functionality from Redux library
import { combineReducers } from 'redux'

// Import compartmentalized reducer files
import lists from './lists'
import app from './app'

// Combine imported reducers
const reducerMux = combineReducers({
    lists,
    app
})

// Set default export value to the combined reducers
export default reducerMux
