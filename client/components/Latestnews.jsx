import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Latestnews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
   }

  render () {
    return (
      <div className="latestnews">
        <h2>Latest News</h2>
      </div>
    )
  }
}


export default Latestnews