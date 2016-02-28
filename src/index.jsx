// Entry point for program

// Miscellaneous Imports
import React from 'react'
//



// Initialize store by applying middleware and using the final reducer
import { createStore, applyMiddleware, combineReducers } from 'redux'
import finalReducer from './reducers/reducerMux'

const bareStore = createStore( finalReducer )
const store = applyMiddleware(  )
              ( bareStore )
//



// Place the entire app on webpage at the 'root' div
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

render(
    <Provider store={bareStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)
//
