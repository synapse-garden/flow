import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers'

export default function(data) {
    var reducer = combineReducers( reducers )
    var finalCreateStore = applyMiddleware()(createStore)
    var store = finalCreateStore(reducer, data)

    return store
}
