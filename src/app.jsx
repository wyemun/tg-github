import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import * as reducers from './reducers'
import AppContainer from './components/AppContainer'

const store = createStore(
 combineReducers({
   ...reducers,
 }),
 compose(
   applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 )
)

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('app')
)
