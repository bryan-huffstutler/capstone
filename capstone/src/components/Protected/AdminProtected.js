import React from 'react'
import Auth from '../Authentication/Auth'

function AdminProtected(props) {
  
  return props.isAdmin() ? props.comp : <Auth />

}

export default AdminProtected