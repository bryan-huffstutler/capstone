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
    recipes: [],
    favRecipe: {},
    searchType: '',
    errMsg: ''
  }

  const [master, setMasterState] = useState(initState)

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

  return (
    <MasterContext.Provider value={{ ...master, resetAuthErr, signup, login, handleAuthErr, logout, handleMasterChange }}>
      {props.children}
    </MasterContext.Provider>
  )
}