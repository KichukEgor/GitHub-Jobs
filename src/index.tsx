import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { store } from './store/store'
import './api/server'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
