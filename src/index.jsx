import React from 'react'
import App from './app'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createStore from './create-store'

const store = createStore( )

render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
      document.getElementById('root')
    )
}
