import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const initInputs = {
  name: "",
  description: "",
  price: 0,
  category: "",
  image: ""
}

export default function Modal(props) {
  const [select, setSelect] = useState("")
  const [input, setInput] = useState(initInputs)

  const {
    closeEdit,
    id,
    image,
    name,
    description,
    price,
    addItem,
    handleChange
  } = props

  function closeModal() {
    closeEdit()
  }

  function inputChange (e) {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function selectChange (e) {
    const {name, value} = e.target
    setSelect(prev => ({
      ...prev,
      [name] : value
    }))
  }

  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <button onClick={closeModal}>CLOSE</button>
        <div id='modal-content'>
          <form>
            <h3>Select an area to edit:</h3>
            <select onChange={selectChange}>
              <option></option>
              <option name="name">Name</option>
              <option name="description">Description</option>
              <option name="price">Price</option>
              <option name="image">Image</option>
              <option name="category">Category</option>
            </select>
          </form>
        </div>

      </div>
    </>

    , document.getElementById('portal'))
}
