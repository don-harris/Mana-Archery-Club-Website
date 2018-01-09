import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Latestevents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
   }

  render () {
    return (
      <div className="tile is-child box">
        <p className="title">Latest Events</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
    )
  }
}


export default Latestevents