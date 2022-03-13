import React from 'react'

function NewEvent(props) {
  const { input, handleChange } = props
  return (
    <div>
      <form>
        <input
          type='text'
          value={input.name}
          name="name"
          onChange={handleChange}
          placeholder="Name of Event" /><br />
        <input
          type='text'
          value={input.date}
          name="date"
          onChange={handleChange}
          placeholder="Date DD/MM/YYYY" /><br />
        <input
          type='text'
          value={input.time}
          name="time"
          onChange={handleChange}
          placeholder="Time of Event" /><br />
        <input
          type='text'
          value={input.artist}
          name="artist"
          onChange={handleChange}
          placeholder="Description" /><br />
      </form>
    </div>
  );
}

export default NewEvent;