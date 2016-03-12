// Import reducer combination functionality from Redux library
import { combineReducers } from 'redux'

// Import compartmentalized reducer files
import filters  from './filters'
import objects  from './objects'
import users    from './users'
import app      from './app'

// Combine imported reducers
const reducerMux = combineReducers({
    filters,
    objects,
    users,
    app
})

// Set default export value to the combined reducers
export default reducerMux
