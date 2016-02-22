import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers'

export default function(data) {
    var finalReducer = combineReducers( reducers )
    //var finalCreateStore = applyMiddleware( )(createStore)
    var store = createStore( finalReducer )

    return store
}
