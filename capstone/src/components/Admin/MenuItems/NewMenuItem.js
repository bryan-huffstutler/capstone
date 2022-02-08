import React from 'react'

function NewMenuItem(props) {
  const {
    input,
    handleChange
  } = props
  return (
    <div>
      <form>
      <input
          type='text'
          value={input.category}
          name="category"
          onChange={handleChange}
          placeholder="Breakfast, Lunch or Dinner?" /><br/>
        <input
          type='text'
          value={input.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Name of Item" /><br/>
        <input
          type='number'
          value={input.price}
          name="price"
          onChange={handleChange}
          placeholder="Enter Price of Item" /><br/>
        <textarea
          style={{width: '200px', height: '100px'}}
          type='textarea'
          value={input.description}
          name="description"
          onChange={handleChange}
          placeholder="Enter description of Item" /><br/>
        <input
          type='text'
          value={input.image}
          name="image"
          onChange={handleChange}
          placeholder="Enter image url of Item" />
      </form>
    </div>
  );
}

export default NewMenuItem;