import React, {useState, useContext} from 'react'
import Modal from '../../Modal/Modal'
import axios from 'axios'
import {MasterContext} from '../../../context/MasterContext'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function MenuItem(props) {
  const [toggle, setToggle] = useState(false)
  const {getMenuItems} = useContext(MasterContext)
  const {
    id,
    name,
    description,
    price,
    image,
    isEditing,
    addItem,
    handleChange
  } = props

  function toggleModal () {
    setToggle(prev => !toggle)
  }
  
  function deleteItem () {
    userAxios.delete(`/admin/menu/${props.id}`)
    .then(res => {
      console.log(`Successfully Deleted ${props.id}`)
      getMenuItems()
    })
    .catch(err => console.log(err))
  }
//need function to edit item
  return ( 
    <div>
      <button onClick={toggleModal}>{name}</button>

      {toggle ? <Modal toggleOpen={toggleModal}>
        <img src={image}/>
        <h2>{name}</h2>
        ${price}
        <p>{description}</p>
        <button onClick={deleteItem}>Delete Item</button>
      </Modal> : ""}

    </div>
   );
}

export default MenuItem;