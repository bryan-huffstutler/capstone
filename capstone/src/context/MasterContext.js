import React, { useState } from 'react'
import axios from 'axios'
export const MasterContext = React.createContext();

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function MasterProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || "",
    errMsg: '',
    isAdmin: false,
    adminMenuState: '',
    adminMenuItems: [],
    adminEvents: [],
    emps: []
  }

  const [master, setMasterState] = useState(initState)

  function submitEdit(item) {

    userAxios.put(`admin/menu/${item.id}`, item)
      .then(res => {
        console.log(`Successfully Edited Item`)
      })
      .catch(err => console.log(err))
  }

  function getEvents() {
    userAxios.get('/admin/event')
      .then(res => {
        console.log(res.data)
        setMasterState(prev => ({
          ...prev,
          adminEvents: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addMenuItem(item) {
    userAxios.post('admin/menu', item)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function addEvent(item) {
    userAxios.post('admin/event', item)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function getMenuItems() {
    userAxios.get('/admin/menu')
      .then(res => {
        console.log(res.data)
        setMasterState(prev => ({
          ...prev,
          adminMenuItems: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function signup(credentials) {
    axios.post('/auth/signup', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setMasterState(prevMasterState => ({
          ...prevMasterState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials) {
    axios.post('/auth/login', credentials)
      .then(res => {
        console.log(res.data)
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setMasterState(prevMasterState => ({
          ...prevMasterState,
          user,
          token,
          isAdmin: user.isAdmin
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setMasterState({ initState })
  }

  function handleAuthErr(errMsg) {
    setMasterState(prevMasterState => ({
      ...prevMasterState,
      errMsg
    }))
  }

  function handleMasterChange(e) {
    const { name, value } = e.target
    setMasterState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function resetAuthErr() {
    setMasterState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function deleteEvent(id) {
    userAxios.delete(`/admin/event/${id}`)
      .then(res => {
        console.log(`Successfully deleted event.`)
      })
      .catch(err => console.log(err))
  }

  function editEvent(item) {
    userAxios.put(`/admin/event/${item.id}`, item)
      .then(res => console.log("Successfully Edited."))
      .catch(err => console.log(err))
  }

  function getEmps() {
    userAxios.get('/admin/employees')
      .then(res => {
        console.log(res.data)
        setMasterState(prev => ({
          ...prev,
          emps: res.data
        }))
      })
      .catch(err => console.log(err))
  }

  return (
    <MasterContext.Provider value={{
      ...master,
      resetAuthErr,
      signup,
      login,
      handleAuthErr,
      logout,
      handleMasterChange,
      getMenuItems,
      addMenuItem,
      submitEdit,
      getEvents,
      deleteEvent,
      editEvent,
      addEvent,
      getEmps,
      // getEmpPto
    }}>
      {props.children}
    </MasterContext.Provider>
  )
}