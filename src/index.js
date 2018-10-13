import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import App from './App'
import reducers from './reducers'

const history = createHistory()
const middleware = [routerMiddleware(history),thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

ReactDOM.render(
  <Provider store={ store }>
    <App history={ history }/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
