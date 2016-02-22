import React from 'react'
import { render } from 'react-dom'
import createStore from './create-store'
import App from './App'

const store = createStore()

render(
    <App store={store} />,
    document.getElementById('root')
);
