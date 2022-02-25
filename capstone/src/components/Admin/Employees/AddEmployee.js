import React, { useContext, useState } from 'react'
import { MasterContext } from '../../../context/MasterContext'
import axios from 'axios'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function AddEmployee(props) {
  const { user } = useContext(MasterContext)

  const initInputs = {
    firstName: "",
    lastName: "",
    phone: 0,
    email: "",
    dob: "",
    ssn: ""
  }

  const infoInputs = {
    username: "",
    password: "",
    isAdmin: false
  }

  const addressInputs = {
    employee: "",
    street: "",
    city: "",
    state: "",
    zipcode: 0
  }

  const [formState, setFormState] = useState(initInputs)
  const [userInfo, setUserInfo] = useState(infoInputs)
  const [address, setAddress] = useState(addressInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleUserChange(e) {
    const { name, value } = e.target
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleAddressChange(e) {
    const { name, value } = e.target
    setAddress(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function initialTimeOff(id) {
    const info = {
      employee: id,
      vacation: 0,
      sick: 0,
      personal: 0
    }
    userAxios.post(`/admin/ptoinitial`, info)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  function submitEmployee(e) {
    e.preventDefault()
    userAxios.post(`/admin/employees`, formState)
      .then(res => {
        props.adding()
        initialTimeOff(res.data._id)
        submitUser(res.data._id)
        submitAddress(res.data._id)
        props.getEmps()
      }
      )
      .catch(err => console.log(err))
  }

  function submitUser(id) {
    const userInformation = {
      employee: id,
      username: userInfo.username,
      password: userInfo.password,
      isAdmin: userInfo.isAdmin
    }
    console.log(userInfo)
    userAxios.post(`/admin/user/creation`, userInformation)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  function submitAddress(id) {
    const addy = {
      employee: id,
      street: address.street,
      city: address.city,
      state: address.state,
      zipcode: address.zipcode
    }
    userAxios.post(`/admin/empAddress`, addy)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  function handleSubmit(e) {
    submitEmployee(e)
  }

  function handleCheckbox(e) {
    setUserInfo(prev => ({
      ...prev,
      isAdmin: !userInfo.isAdmin
    }))
  }

  return (
    <div>
      <form>
        <h4>Personal Info</h4>

        <label>
          First Name:
          <input onChange={handleChange} required name="firstName" value={formState.firstName}></input>
        </label>
        <label>
          Last Name:
          <input onChange={handleChange} required name="lastName" value={formState.lastName}></input>
        </label>
        <label>
          D.O.B:
          <input onChange={handleChange} required name="dob" value={formState.dob}></input>
        </label>
        <label>
          Phone:
          <input onChange={handleChange} required name="phone" value={formState.phone}></input>
        </label>
        <label>
          Email:
          <input onChange={handleChange} required name="email" value={formState.email}></input>
        </label>
        <label>
          SSN:
          <input onChange={handleChange} required name="ssn" value={formState.ssn}></input>
        </label>

        <h4>Address</h4>
        <label>
          Street Address:
          <input type='text' required name='street' onChange={handleAddressChange} value={address.street}></input>
        </label>
        <label>
          City:
          <input type='text' required name='city' onChange={handleAddressChange} value={address.city}></input>
        </label>
        <label>
          State:
          <select name='state' value={address.state} onChange={handleAddressChange}>
            <option></option>
            <option value='AL'>AL</option>
            <option value='AK'>AK</option>
            <option value='AZ'>AZ</option>
            <option value='CA'>CA</option>
            <option value='CO'>CO</option>
            <option value='CT'>CT</option>
            <option value='DE'>DE</option>
            <option value='FL'>FL</option>
            <option value='GA'>GA</option>
            <option value='HI'>HI</option>
            <option value='ID'>ID</option>
            <option value='IL'>IL</option>
            <option value='IN'>IN</option>
            <option value='IA'>IA</option>
            <option value='KS'>KS</option>
            <option value='KY'>KY</option>
            <option value='LA'>LA</option>
            <option value='ME'>ME</option>
            <option value='MD'>MD</option>
            <option value='MA'>MA</option>
            <option value='MI'>MI</option>
            <option value='MN'>MN</option>
            <option value='MS'>MS</option>
            <option value='MO'>MO</option>
            <option value='MT'>MT</option>
            <option value='NE'>NE</option>
            <option value='NV'>NV</option>
            <option value='NH'>NH</option>
            <option value='NJ'>NJ</option>
            <option value='NM'>NM</option>
            <option value='NY'>NY</option>
            <option value='NC'>NC</option>
            <option value='ND'>ND</option>
            <option value='OH'>OH</option>
            <option value='OK'>OK</option>
            <option value='OR'>OR</option>
            <option value='PA'>PA</option>
            <option value='RI'>RI</option>
            <option value='SC'>SC</option>
            <option value='SD'>SD</option>
            <option value='TN'>TN</option>
            <option value='TX'>TX</option>
            <option value='UT'>UT</option>
            <option value='VT'>VT</option>
            <option value='VA'>VA</option>
            <option value='WA'>WA</option>
            <option value='WV'>WV</option>
            <option value='WI'>WI</option>
            <option value='WY'>WY</option>
          </select>
        </label>
        <label>
          Zipcode:
          <input type='number' value={address.zipcode} onChange={handleAddressChange}></input>
        </label>

        <h4>Login Information</h4>
        <label>
          UserName:
          <input onChange={handleUserChange} required name="username" value={formState.username}></input>
        </label>
        <label>
          Password:
          <input onChange={handleUserChange} required name="password" value={formState.password}></input>
        </label>
        <label>
          Admin:
          <input type="checkbox" onChange={handleCheckbox}></input>
        </label>

      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={props.adding}>Cancel</button>
    </div>
  );
}

export default AddEmployee;