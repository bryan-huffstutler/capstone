import React, { useContext, useState, useEffect } from 'react'
import AdminEvent from './AdminEvent'
import { MasterContext } from '../../../context/MasterContext'
import NewEvent from './NewEvent'

const initInputs = {
  name: "",
  date: "",
  artist: "",
  time: ""
}
function AdminEvents() {
  const { getEvents, adminEvents, addEvent } = useContext(MasterContext)
  const [add, setAdd] = useState(false)
  const [inputs, setInputs] = useState(initInputs)

  function getAllEvents() {
    getEvents()
  }

  function addingEvent() {
    setAdd(() => !add)
  }

  function clearState() {
    setInputs(() => initInputs)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function addNewEvent(item) {
    addEvent(item)
    addingEvent()
    clearState()
    getEvents()
  }

  useEffect(() => getAllEvents(), [])

  return (
    <div>
      <p style={{color: 'white', fontWeight: 'bold', backgroundColor: 'red', textAlign: 'center'}}>CHANGES MADE HERE REFLECT ON LIVE SITE!</p>
      <button onClick={addingEvent}> + New Event </button>
      {add ? 
      <div>
        <NewEvent handleChange={handleChange} input={inputs}/>
        <button onClick={() => addNewEvent(inputs)}>Submit</button>
        <button onClick={addingEvent}>Cancel</button>
      </div> : ""}
      


      {adminEvents ? adminEvents.map(x => {
        return <AdminEvent
          key={x._id}
          id={x._id}
          name={x.name}
          date={x.date}
          time={x.time}
          artist={x.artist}
          getEvents={getAllEvents}
        />
      })
        : ""}
    </div>
  );
}

export default AdminEvents;