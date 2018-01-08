import React from 'react'

import Latestnews from './Latestnews'
import Latestevents from './Latestevents'

const Homepage = () => (
    <div className='columns'>
      <div className='column'>
      <Latestnews/>
      </div>
      <div className='column'>
      <Latestevents/>
      </div>
    </div>
)

export default Homepage