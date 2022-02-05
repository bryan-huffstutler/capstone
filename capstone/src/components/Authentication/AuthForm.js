import React from 'react'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props

  return (
    <div id='auth-form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Username" /><br/>
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password" /><br/>
        <button className='button'>{btnText}</button><br/>
        <p style={{ backgroundColor: "#c00000", color: "#ffffff", textAlign: "center" }} >{errMsg}</p>
      </form>
    </div>

  )
}