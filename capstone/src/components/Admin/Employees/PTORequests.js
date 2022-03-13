import React from 'react'
import axios from 'axios'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function PTORequests(props) {
  const {requests,getReqs, empId} = props

  function deletePTOReqs(ptoId) {
    userAxios.delete(`/admin/employee/pto/${ptoId}`)
    .then(res => getReqs())
    .catch(err => console.log(err))
  }

  function deny(ptoId) {
    userAxios.put(`/admin/employee/ptoreqs/${ptoId}`, {approval: "Denied"})
    .then(res => {
      getReqs()
    })
    .catch(err => console.log(err))
  }

  function approve(ptoId) {
    userAxios.put(`/admin/employee/ptoreqs/${ptoId}`, {approval: "Approved"})
    .then(res => {
      getReqs()
    })
    .catch(err => console.log(err))
  }

  return ( 
    <div>
      <h4>Time Off Requests</h4>
      {requests.map(x => {
        return <div id={x._id} key={x._id}>
          <p>Date Requested: {x.date}</p>
          <p>Time of Day: {x.time}</p>
          <p>Type and Amount of Time: {x.typeOfTime}({x.amount})</p>
          <p>{x.approval == null ? "Not Seen By Manager" : x.approval}</p>
          <button style={{margin: '5px'}} onClick={() => deny(x._id)}>Deny Request</button>
          <button style={{margin: '5px'}} onClick={() => approve(x._id)}>Approve Request</button>
          <button style={{margin: '5px'}} onClick={() => deletePTOReqs(x._id)}>Delete</button>
        </div>
      })}
    </div>
   );
}

export default PTORequests;