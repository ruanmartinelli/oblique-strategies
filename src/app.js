import { h } from 'preact'
import { Router } from 'preact-router'

import Home from './pages/home'

const App = () => {
  if (typeof window == 'undefined') {
    return
  }

  return (
    <div id="app">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  )
}

export default App
