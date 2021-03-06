// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'

import SimonGame from './components/SimonGame'
import Lobby from './games/Lobby'
import App from './App'

import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

        <IndexRoute component={Lobby} />
        <Route path="/games/:gamesId" component={SimonGame} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
injectTapEventPlugin()
