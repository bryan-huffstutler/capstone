import React, { useState, useContext } from 'react'
import Modal from '../../Modal/Modal'
import axios from 'axios'
import EditForm from './EditForm'
import { MasterContext } from '../../../context/MasterContext'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})



function MenuItem(props) {
  const [toggle, setToggle] = useState(false)
  const [edit, setEdit] = useState(false)
  const {
    id,
    name,
    description,
    price,
    image,
    category
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
  const { getMenuItems } = useContext(MasterContext)


  function toggleModal() {
    setToggle(prev => !toggle)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // function handleEditSubmit(item) {
  //   editItem()
  //   submitEdit(item)
  //   setInputs(()=> initInputs)
  //   getMenuItems()
  // }

  function deleteItem() {
    userAxios.delete(`/admin/menu/${props.id}`)
      .then(res => {
        console.log(`Successfully Deleted ${props.id}`)
        getMenuItems()
      })
      .catch(err => console.log(err))
  }

  function editItem() {
    setEdit(() => !edit)
  }

  return (
    <div style={{margin: '15px'}}>
      <h4>{name}</h4>
      <button style={{margin: '0px 3px'}}onClick={toggleModal}>See Item</button>

      {edit ?
        <EditForm 
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
          category={category}
          setEdit={editItem}
        />
        : <button style={{margin: '0px 3px'}}onClick={editItem}>Edit Item</button>}

      {toggle ? <Modal toggleOpen={toggleModal}>
        <img src={image} />
        <h2>{name}</h2>
        ${price}
        <p>{description}</p>
      </Modal> : ""}

    </div>
  );
}

export default MenuItem;