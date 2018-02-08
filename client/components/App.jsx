import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Homepage from './Homepage'
import Practice from './Practice'
import Footer from './Footer'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className="title is-1">Mana Archery Club</h1>
      <div className="logo"><img src="./images/logo.bmp" /></div>
      <Route path='/' component={Navbar} />
      <hr/>
      <Route exact path='/' component={Homepage}/>
      <Route path='/practice' component={Practice}/>
      <br/>
      <Footer />
    </div>
  </Router>
)

export default App
