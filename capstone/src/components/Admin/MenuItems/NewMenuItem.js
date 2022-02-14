import React from 'react'

function NewMenuItem(props) {
  const {
    input,
    handleChange
  } = props
  return (
    <div>

      <form>
        <label>
          Category:
          <select name="category" onChange={handleChange}>
            <option></option>
            <option value="Appetizer">Appetizer</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Kids">Kids</option>
            <option value="Drinks">Drinks</option>
          </select><br />
        </label>

        <label>
          Name:
          <input
            type='text'
            value={input.name}
            name="name"
            onChange={handleChange}
            placeholder="Enter Name of Item" /><br />
        </label>

        <label>
          Price:
          <input
            type='number'
            value={input.price}
            name="price"
            onChange={handleChange}
            placeholder="Enter Price of Item" /><br />
        </label>

        <label>
          Description:
          <textarea
            style={{ width: '200px', height: '100px' }}
            type='textarea'
            value={input.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter description of Item" /><br />
        </label>

        <label>
          Image URL:
          <input
            type='text'
            value={input.image}
            name="image"
            onChange={handleChange}
            placeholder="Enter image url of Item" />
        </label>


      </form>

    </div>
  );
}

export default NewMenuItem;