import React, {useContext } from 'react'
import axios from 'axios'
import { MasterContext } from '../../context/MasterContext'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function EditPersonal(props) {
  const { user } = useContext(MasterContext)
  const init = {
    email: "",
    phone: ""
  }

  function handleInfoChange(e) {
    const { name, value } = e.target
    props.setInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updateInfo = {
      email: props.info.email,
      phone: props.info.phone
    }
    userAxios.put(`/employee/info/${user.employee}`, updateInfo)
      .then(res => {
        props.setToggle()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input type='text' required name='email' onChange={handleInfoChange} value={props.info.email} ></input>
        </label><br />

        <label>
          Phone:
          <input type='text' required name='phone' onChange={handleInfoChange} value={props.info.phone} ></input>
        </label><br />
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={props.setToggle}>Cancel</button>
    </div>
  );
}

export default EditPersonal;