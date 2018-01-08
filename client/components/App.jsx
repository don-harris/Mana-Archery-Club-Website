import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Signup from './Signup' 

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">Mana Archery Club</h1>
      <Route path='/signup' component={Signup}/>
      <div>
        <button><Link to='/signup'>Sign Up</Link></button>
        </div>
    </div>
  </Router>
)

export default App
