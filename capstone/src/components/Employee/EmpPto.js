import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PtoReq from './PtoReq'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function EmpPto(props) {
  const init = {
    vacation: 0,
    sick: 0,
    personal: 0
  }

  const [pto, setPto] = useState(init)

  async function getEmpPto() {
    const user = await localStorage.getItem('user')
    const info = JSON.parse(user)
    await userAxios.get(`/employee/pto/${info.employee}`)
      .then(res => {
        setPto(prev => ({
          ...prev,
          vacation: res.data.vacation,
          sick: res.data.sick,
          personal: res.data.personal
        }))
      })
  }

  useEffect(async () => {
    await getEmpPto()
  }, [])

  return (
    <div>
      <h3>Available Time</h3>
      <h5>Vacation: {pto.vacation}</h5>
      <h5>Sick: {pto.sick}</h5>
      <h5>Personal: {pto.personal}</h5>
      <PtoReq />
    </div>
  );
}

export default EmpPto;