import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/index'
import {Provider} from "react-redux"
import { render } from 'react-dom'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import Counter from "./components/Counter";

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
