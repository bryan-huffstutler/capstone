import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { MasterContext } from '../../context/MasterContext'
import Request from './Request'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function EmpPtoReqs() {

  const { user, getPtoReqs, empPtoReqs } = useContext(MasterContext)

  function getReqs(id) {
    console.log(user.employee)
    getPtoReqs(id)
  }

  useEffect(() => {
    
    getReqs(user.employee)
  }, [])

  return (
    <div>
      {empPtoReqs ? <div>
        <h3>Requested Dates</h3>
        {empPtoReqs.map(x => {
          return <Request
            date={x.date}
            time={x.time}
            typeOfTime={x.typeOfTime}
            amount={x.amount}
            approval={x.approval}
            id={x._id}
            key={x._id}
          />
        })}</div> : ""}

    </div>
  );
}

export default EmpPtoReqs;