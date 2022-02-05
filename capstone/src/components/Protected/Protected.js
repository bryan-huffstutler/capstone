import React from 'react'
import Auth from '../Authentication/Auth'

function Protected(props) {

  return props.auth ? props.comp : <Auth />

}

export default Protected