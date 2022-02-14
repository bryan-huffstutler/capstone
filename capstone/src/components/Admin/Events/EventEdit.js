import React, { useContext, useState } from 'react'
import { MasterContext } from '../../../context/MasterContext'

function EventEdit(props) {
  const { getEvents, editEvent } = useContext(MasterContext)
  const {
    id,
    date,
    name,
    time,
    artist,
    setEdit
  } = props
  const initInputs = {
    id: id,
    date: date,
    name: name,
    time: time,
    artist: artist
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function submitEdit(item) {
    console.log(item)
    setEdit()
    editEvent(item)
    setInputs(() => initInputs)
    getEvents()
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder={name}
          value={inputs.name}
          name="name" />
        <input
          onChange={handleChange}
          type="text"
          placeholder={date}
          value={inputs.date}
          name="date" />
        <input
          onChange={handleChange}
          type="text"
          placeholder={time}
          value={inputs.time}
          name="time" />
        <input
          onChange={handleChange}
          type="text"
          placeholder={artist}
          value={inputs.artist}
          name="artist" />
        <button onClick={() => submitEdit(inputs)}>Submit</button>
        <button onClick={setEdit}>Cancel</button>
      </form>
    </div>
  );
}

export default EventEdit;