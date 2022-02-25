import React from 'react'
import EmpAuth from '../Authentication/EmpAuth'

function Protected(props) {

  return props.auth ? props.comp : <EmpAuth />

}

export default Protected