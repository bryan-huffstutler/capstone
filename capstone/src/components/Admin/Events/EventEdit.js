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
    getEvents()
    setInputs(() => initInputs)
  }

  return (
    <div>
      <form>
        <input
          style={{ margin: '5px' }}
          onChange={handleChange}
          type="text"
          placeholder={name}
          value={inputs.name}
          name="name" /><br />
        <input
          style={{ margin: '5px' }}
          onChange={handleChange}
          type="text"
          placeholder={date}
          value={inputs.date}
          name="date" /><br />
        <input
          style={{ margin: '5px' }}
          onChange={handleChange}
          type="text"
          placeholder={time}
          value={inputs.time}
          name="time" /><br />
        <input
          style={{ margin: '5px' }}
          onChange={handleChange}
          type="text"
          placeholder={artist}
          value={inputs.artist}
          name="artist" /><br />
        <button style={{margin: '5px'}}onClick={() => submitEdit(inputs)}>Submit</button>
        <button style={{margin: '5px'}}onClick={setEdit}>Cancel</button>
      </form>
    </div>
  );
}

export default EventEdit;