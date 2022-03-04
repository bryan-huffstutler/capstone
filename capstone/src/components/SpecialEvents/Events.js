import React, {useState, useContext, useEffect} from 'react'
import {MasterContext } from '../../context/MasterContext'
import Event from './Event'
import './Events.css'

function Events() {

  const {getEvents, adminEvents} = useContext(MasterContext)

  function getAllEvents () {
    console.log(adminEvents)
    getEvents()
  }

  useEffect ( () => {
    getAllEvents()
  }, [])

  return ( 
    <div style={{textAlign: 'center'}} id='event-container'>
      <h1>Special Events</h1>
      {adminEvents.map(x => {
        return <Event 
          name={x.name}
          date={x.date}
          time={x.time}
          artist={x.artist}
        />
      })}
    </div>
   );
}

export default Events;