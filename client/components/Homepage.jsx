import React from 'react'

import Latestnews from './Latestnews'
import Latestevents from './Latestevents'

const Homepage = () => (
    <div className='columns tile is-ancestor'>
      <div className='column tile is-4 is-vertical is-parent'>
      <Latestnews/>
      </div>
      <div className='column tile is-4 is-vertical is-parent'>
      <Latestevents/>
      </div>
    </div>
)

export default Homepage