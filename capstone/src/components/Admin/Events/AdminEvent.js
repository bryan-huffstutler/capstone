import React, {useContext, useState} from 'react'
import {MasterContext} from '../../../context/MasterContext'
import EventEdit from './EventEdit'

function AdminEvent(props) {
  const {deleteEvent,  editEvent} = useContext(MasterContext)
  const [edit, setEdit] = useState(false)
  

  function handleDelete() {
    deleteEvent(props.id)
    props.getEvents()
  }

  function toggleEdit () {
    setEdit(() => !edit)
  }

  return ( 
    <div style={{margin: '10px'}}>
      {props.name}<br/>
      {props.date} : {props.time}<br/>
      {props.artist}
      <button onClick={handleDelete}>Delete</button>

      {edit ? 
      <EventEdit 
        id={props.id}
        date={props.date}
        name={props.name}
        time={props.time}
        artist={props.artist}
        setEdit={toggleEdit}
      />
      : <button onClick={() => setEdit(() => !edit)}>Edit</button>}

    </div>
   );
}

export default AdminEvent;