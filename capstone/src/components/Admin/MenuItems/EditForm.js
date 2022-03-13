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
        style={{margin: '5px'}}
          onChange={handleChange}
          type="text"
          placeholder={name}
          value={inputs.name}
          name="name" /><br/>
        <input
        style={{margin: '5px'}}
          onChange={handleChange}
          type="text"
          placeholder={price}
          value={inputs.price}
          name="price" /><br/>
        <textarea
          style={{margin: '5px'}}
          rows='7'
          cols='27'
          onChange={handleChange}
          type="text"
          placeholder={description}
          value={inputs.description}
          name="description" /><br/>
        <input
        style={{margin: '5px'}}
          onChange={handleChange}
          type="text"
          placeholder={category}
          value={inputs.category}
          name="category" /><br/>
        <input
        style={{margin: '5px'}}
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
          value={inputs.image}
          name="image" /><br/>
      </form>
      <button onClick={() => handleEditSubmit(inputs)}>Submit</button>
      <button onClick={setEdit}>Cancel</button>

    </div>
  );
}

export default EditForm;