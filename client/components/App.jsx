import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">Mana Archery Club</h1>
      <Route path='/' component={Navbar} />
      {/* <Route exact path='/' component={Latestnews} />      
      <Route exact path='/' component={Latestevents} />      
      <Route exact path='/' component={Homephotos} />       */}
      {/* <Route path='/signup' component={Signup}/> */}
    </div>
  </Router>
)

export default App
