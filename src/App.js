import React from 'react'
import MyHeader from './common/MyHeader'
import { BrowserRouter, Route } from 'react-router-dom'
import loadable from './loadable'

const Home = loadable(() => import('./pages/home'))
const Detail = loadable(() => import('./pages/detail'))
const Login = loadable(() => import('./pages/login'))
const Write = loadable(() => import('./pages/write'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <MyHeader />
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
