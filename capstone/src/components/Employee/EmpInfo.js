import React, { useContext, useState, useEffect } from 'react'
import { MasterContext } from '../../context/MasterContext'
import axios from 'axios'
import EditAddress from './EditAddress'
import EditPersonal from './EditPersonal'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function EmpInfo(props) {
  const { user } = useContext(MasterContext)
  const init = {
    firstName: "",
    lastName: "",
    dob: "",
    ssn: "",
    email: "",
    dateOfHire: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  }
  const [info, setInfo] = useState(init)
  const [toggle, setToggle] = useState(false)
  const [personalToggle, setPersonalToggle] = useState(false)

  function getEmpInfo(id) {
    userAxios.get(`/employee/info/${id}`)
      .then(res => {
        const { firstName,
          lastName,
          dob,
          ssn,
          email,
          dateOfHire,
          phone } = res.data
        setInfo(prev => ({
          ...prev,
          firstName,
          lastName,
          dob,
          ssn,
          email,
          dateOfHire,
          phone
        }))
      })
  }

  function getAddress(id) {
    userAxios.get(`/employee/address/${id}`)
      .then(res => {
        console.log(res.data)
        const {
          street, city, state, zipcode
        } = res.data
        setInfo(prev => ({
          ...prev,
          street,
          city,
          state,
          zipcode
        }))
      })
      .catch(err => console.log(err))
  }

  function getInfo (id) {
    getAddress(id)
    getEmpInfo(id)
  }

  function toggleAddressEdit() {
    setToggle(prev => !toggle)
    getAddress(user.employee)
  }

  function togglePersonalEdit() {
    setPersonalToggle(prev => !personalToggle)
    getEmpInfo(user.employee)
  }

  useEffect(() => {
    getInfo(user.employee)
  }, [])

  return (
    <div>
      <h2>{info.firstName} {info.lastName}</h2>
      <div>
        <h4>Personal Information</h4>
        {personalToggle ? <EditPersonal info={info} setToggle={togglePersonalEdit} setInfo={setInfo}/>
          : <div>
            <p>Email: {info.email}</p>
            <p>Phone: {info.phone}</p>
            <p>D.O.B: {info.dob}</p>
            <p>SSN: {info.ssn}</p>
            <p>Date of Hire: {info.dateOfHire.slice(0, 10)}</p>
            <button onClick={()=>setPersonalToggle(prev => !personalToggle)}>Edit</button>
          </div>
        }

      </div>

      <div>
        <h4>Address</h4>
        {toggle ?
          <EditAddress info={info} setToggle={toggleAddressEdit} setInfo={setInfo} />
          : <div>
            <p>Please keep these values up to date, as they reflect where your paystubs and W2's will be sent!</p>
            <p>Street: {info.street}</p>
            <p>City: {info.city}</p>
            <p>State: {info.state}</p>
            <p>Zipcode: {info.zipcode}</p>
            <button onClick={() => setToggle(prev => !toggle)}>Edit</button>
          </div>}
      </div>
    </div>
  );
}

export default EmpInfo;