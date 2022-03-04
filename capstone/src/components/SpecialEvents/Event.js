import React from 'react'
import './Event.css'

function Event(props) {
  return ( 
    <div className='event-module'>
      <h2>{props.name}</h2>
      <h3>{props.time} {props.date}</h3>
      <h4>{props.artist}</h4>
    </div>
   );
}

export default Event;