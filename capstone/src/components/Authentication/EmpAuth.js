import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { MasterContext } from '../../context/MasterContext'

function EmpAuth() {
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
        <h1>BBs Employee Login</h1>
        <AuthForm
          handleChange={handleChange}
          handleSubmit={handleLogin}
          inputs={inputs}
          btnText="Login"
          errMsg={errMsg}
        />
        <br />
      </div>
    </div>
  );
}

export default EmpAuth;