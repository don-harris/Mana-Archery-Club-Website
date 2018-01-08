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
      <div className="latestevents">
        <h2>Latest Events</h2>
      </div>
    )
  }
}


export default Latestevents