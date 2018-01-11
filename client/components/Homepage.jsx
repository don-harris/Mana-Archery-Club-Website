import React from 'react'
import {Link} from 'react-router-dom'

import Latestnews from './Latestnews'
import Latestevents from './Latestevents'

import data from '../../data.json'

function cycleNews () {
  console.log(data.news)
  
}

const Homepage = () => (
<div>
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <article className="tile is-child box notification is-primary">
    <p className="title">Latest News</p>
    <p className="subtitle">{data.news[0].title}</p>
    <p>{data.news[0].story}</p>
  </article>
</div>
<div className="tile is-parent">
  <article className="tile is-child box">
    <p className="title">Welcome to Mana Archery Club!</p>
    <p className="subtitle">Here you can have a look around at some of the latest news and events. You can also see below photos of some of the recent events. If you are interested in joining our club please click the link.</p>
  </article>
</div>
<div className="tile is-parent">
  <article className="tile is-child box">
    <p className="title">Latest Events</p>
    <p className="subtitle">With some content</p>
    <div className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
  </article>
</div>
</div>
<div className="tile is-ancestor">
<div className="tile is-vertical is-8">
  <div className="tile">
    <div className="tile is-parent is-vertical">
      <article className="tile is-child box">
        <p className="title">More news</p>
        <p className="subtitle">Top box</p>
      </article>
      <article className="tile is-child box">
        <p className="title">More news</p>
        <p className="subtitle">New to Archery?</p>
      </article>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">Gallery</p>
        <p className="subtitle">Palmerston North Nationals</p>
        <figure className="image is-4by3">
          <img src="/images/archery_web.jpg"/>
        </figure>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">In your local community</p>
      <p className="subtitle">Stuff happening in the area</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>
<div className="tile is-parent">
  <article className="tile is-child box notification is-info">
    <div className="content">
      <p className="title">More events</p>
      <p className="subtitle">Recent events and top scores</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
        <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
        <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
      </div>
    </div>
  </article>
</div>
</div>

<div className="tile is-ancestor">
</div>
<button className="button is-primary"><Link to="/practice">Practice page</Link></button>
</div>
)

export default Homepage