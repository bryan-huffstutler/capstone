import React, {useContext} from 'react'
import Auth from '../Authentication/Auth'
import {MasterContext} from '../../context/MasterContext'
import AdminLayout from '../Admin/AdminLayout'
import axios from 'axios'

function Admin() {
  const { token } = useContext(MasterContext)

  function getEmps() {
    axios.get('/admin/employees')
        .then(res => {
          console.log(res.data)
        })
  }
  return (
    <div id='admin-background'>
      {token ? <AdminLayout /> : <Auth />}
    </div>
  );
}

export default Admin;