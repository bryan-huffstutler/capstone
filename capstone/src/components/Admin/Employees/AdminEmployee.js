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
    contact: false,
    pto: false,
    reqs: false,
    timeoff: {
      vacation: 0,
      sick: 0,
      personal: 0
    },
    ptoreqs: []
  }
  const [empState, setEmpState] = useState(initInputs)
  const {
    id,
    name,
    dateOfHire,
    phone,
    email,
    dob,
    ssn
  } = props

  function toggleContact() {
    setEmpState(prev => ({
      ...prev,
      contact: !empState.contact
    }))
  }

  function togglePto() {
    getEmpPto()
    setEmpState(prev => ({
      ...prev,
      pto: !empState.pto
    }))
  }

  async function getEmpPto() {
    await userAxios.get(`/admin/employee/pto/${id}`)
      .then(res => {
        setEmpState(prev => ({
          ...prev,
          timeoff: res.data
        }))
      })
      .then(res => {
        setEmpState(prev => ({
          ...prev,
          pto: !empState.pto
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

  function toggleReqs() {
    setEmpState(prev => ({
      ...prev,
      reqs: !empState.reqs
    }))
  }

  function openPTOModal () {
    toggleReqs()
    getEmpPtoReqs()
  }

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={toggleContact}>Contact Info</button>
      {empState.contact ? <Modal toggleOpen={toggleContact}>
        <h1>{name}</h1>
        <h5>Email: {email}</h5>
        <h5>Phone: {phone}</h5>
      </Modal> : ""}

      <button onClick={togglePto}>PTO</button>
      {empState.pto ? <Modal toggleOpen={togglePto}>
        <h1>{name}</h1>
        <h5>Vacation: {empState.timeoff.vacation}</h5>
        <h5>Sick: {empState.timeoff.sick}</h5>
        <h5>Personal: {empState.timeoff.personal}</h5>
      </Modal> : ""}

      <button onClick={openPTOModal}>PTO Requests</button>
      {empState.reqs ? <Modal toggleOpen={toggleReqs}>
        <PTORequests empId={id} getReqs={getEmpPtoReqs} requests={empState.ptoreqs}/>
      </Modal> : ""}

    </div>
  );
}

export default Employee;