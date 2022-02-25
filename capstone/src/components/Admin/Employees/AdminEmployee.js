import React, { useState, useContext, useEffect } from 'react'
import Modal from '../../Modal/Modal'
import { MasterContext } from '../../../context/MasterContext'
import axios from 'axios'
import PTORequests from './PTORequests'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function Employee(props) {
  const initInputs = {
    vacation: 0,
    sick: 0,
    personal: 0,
    ptoreqs: [],
    timeOffId: "",
    name: "",
    dob: "",
    email: "",
    phone: ""
  }
  const [empState, setEmpState] = useState(initInputs)
  const [timeToggle, setTimeToggle] = useState(false)
  const [editInfoToggle, setEditInfoToggle] = useState(false)

  const {
    id,
    name,
    dateOfHire,
    phone,
    email,
    dob,
    ssn,
    getEmps,
    clearEmp
  } = props

  function toggleTime() {
    setTimeToggle(!timeToggle)
  }

  function toggleEditInfo() {
    setEditInfoToggle(!editInfoToggle)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setEmpState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function getEmpPto() {
    await userAxios.get(`/admin/employee/pto/${id}`)
      .then(res => {
        console.log(res)
        setEmpState(prev => ({
          ...prev,
          personal: res.data.personal,
          vacation: res.data.vacation,
          sick: res.data.sick
        }))
      })
      .catch(err => console.log(err))
  }

  async function getEmpPtoReqs() {
    await userAxios.get(`/admin/employee/ptoreqs/${id}`)
      .then(res => {
        setEmpState(prev => ({
          ...prev,
          ptoreqs: res.data
        }))
      })
      .catch(err => console.log(err))
  }

  function editTimeSubmit() {
    userAxios.put(`/admin/employee/pto/${id}`, {
      "vacation": empState.vacation,
      "sick": empState.sick,
      "personal": empState.personal
    })
      .then(res => {
        toggleTime()
        console.log(res)
      })
  }

  function deleteEmployee() {
    userAxios.delete(`/admin/employees/${id}`)
      .then(res => {
        getEmps()
        clearEmp()
      }
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getEmpPtoReqs()
    getEmpPto()
  }, [])

  return (
    <div>

      <div>
        <h2>{name}</h2>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={deleteEmployee}
        >Delete Employee</button>
        <h5>Email: {email}</h5>
        <h5>Phone: {phone}</h5>
        <h5>DOB: {dob}</h5>
      </div>

      <div>
        {timeToggle ?
          <div>
            <form>
              <label>Vacation:
                <input type="number" onChange={handleChange} name="vacation" value={empState.vacation}></input>
              </label>
              <br />
              <label>Sick:
                <input type="number" onChange={handleChange} name="sick" value={empState.sick}></input>
              </label>
              <br />
              <label>Personal:
                <input type="number" onChange={handleChange} name="personal" value={empState.personal}></input>
              </label>
              <br />
            </form>
            <button onClick={editTimeSubmit}>Submit</button>
            <button onClick={toggleTime}>Cancel</button>
          </div> : <div>
            <button onClick={toggleTime}>Edit Time</button>
            <h5>Vacation: {empState.vacation}</h5>
            <h5>Sick: {empState.sick}</h5>
            <h5>Personal: {empState.personal}</h5>
          </div>}
      </div>

      {empState.ptoreqs ?
        <div>
          <PTORequests getReqs={getEmpPtoReqs} requests={empState.ptoreqs} empId={id} />
        </div> : ""}


    </div>
  );
}

export default Employee;