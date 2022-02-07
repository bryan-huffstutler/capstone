import React, {useContext} from 'react'
import Auth from '../Authentication/Auth'
import {MasterContext} from '../../context/MasterContext'
import AdminLayout from '../Admin/AdminLayout'

function Admin() {
  const { token } = useContext(MasterContext)

  return (
    <div>
      {token ? <AdminLayout /> : <Auth />}
    </div>
  );
}

export default Admin;