import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">Mana Archery Club</h1>
      <Route exact path="/" component={Greetings} />
      <div>
        <button>Sign Up</button>
        </div>
    </div>
  </Router>
)

export default App
