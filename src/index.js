import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import App from './App'
import GlobalStyle from './reset-style'
import GlobalFontStyle from './assets/iconfont/iconfont'

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <GlobalFontStyle />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root')
)
