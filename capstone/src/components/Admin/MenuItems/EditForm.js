import React, {useState, useContext} from 'react'
import {MasterContext} from '../../../context/MasterContext'

function EditForm(props) {
  
  const {submitEdit, getMenuItems} = useContext(MasterContext)
  const {
    id,
    name,
    description,
    price,
    image,
    category,
    setEdit
  } = props
  const initInputs = {
    id: id,
    name: name,
    image: image,
    category: category,
    price: price,
    description: description
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleEditSubmit(item) {
    setEdit()
    submitEdit(item)
    setInputs(()=> initInputs)
    getMenuItems()
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
          placeholder={price}
          value={inputs.price}
          name="price" />
        <input
          onChange={handleChange}
          type="text"
          placeholder={description}
          value={inputs.description}
          name="description" />
        <input
          onChange={handleChange}
          type="text"
          placeholder={category}
          value={inputs.category}
          name="category" />
        <input
          onChange={handleChange}
          type="text"
          placeholder="image URL"
          value={inputs.image}
          name="image" />
      </form>
      <button onClick={() => handleEditSubmit(inputs)}>Submit</button>
      <button onClick={setEdit}>Cancel</button>

    </div>
  );
}

export default EditForm;