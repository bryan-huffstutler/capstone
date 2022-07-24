import React, { useState, useContext } from 'react'
import { MasterContext } from '../../context/MasterContext'
import AuthForm from './AuthForm'

export default function Auth() {
  const initInputs = { username: "", password: "" }

  const [inputs, setInputs] = useState(initInputs)

  const { login, errMsg, resetAuthErr } = useContext(MasterContext)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }

  return (
    <div className="auth-container">
      <div className='auth-form-container'>
        <h1>BBs Admin Login</h1>
        <AuthForm
          handleChange={handleChange}
          handleSubmit={handleLogin}
          inputs={inputs}
          btnText="Login"
          errMsg={errMsg}
        />
        <br />
        <h3>Username: admin Password: admin</h3>
        <p>Login in with these credentials to test out the admin panel where you can handle employees, menu items (updates to menu make live changes on the website) and more.</p>
      </div>
    </div>
  )
}