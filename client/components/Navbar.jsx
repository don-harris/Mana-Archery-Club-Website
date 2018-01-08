import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  
      <div className="navbar-item">
        <Link to='/'>
         Home
        </Link>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link  is-active">
          Profile
        </a>
        <div className="navbar-dropdown is-boxed">
          <div className="navbar-item ">
            <Link to='/login'>
            Login
            </Link>
          </div>
          <div className="navbar-item ">
            <Link to='/register'>
            Register
            </Link>
          </div>
          <div className="navbar-item ">
            <Link to='/profile'>
            Profile page
            </Link>
          </div>
          <a className="navbar-item">
            Sign out
          </a>
        </div>
      </div>

      <div className="navbar-item">
        <Link to='/'>News</Link>
      </div>
      <div className="navbar-item">
        <Link to='/'>Events</Link>
      <div className="navbar-item">
        <Link to='/'>Gallery</Link>
      </div>
      </div>
    </nav>
  )
}

export default NavBar