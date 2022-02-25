import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { MasterContext } from '../../context/MasterContext'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function ReqForm(props) {
  const init = {
    employee: "",
    date: "",
    time: "",
    typeOfTime: "",
    amount: 0
  }
  const {getPtoReqs, user} = useContext(MasterContext)
  const [data, setData] = useState(init)

  function setEmployee () {
    const user = localStorage.getItem('user')
    const info = JSON.parse(user)
    setData(prev => ({
      ...prev,
      employee: info.employee
    }))
  }

  function handleChange(e) {
    const {name, value} = e.target
    setData(prev => ({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    userAxios.post(`/employee/ptorequest`, data)
    .then(res => {
      props.setToggle()
      getPtoReqs(user.employee)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    setEmployee()
  }, [])

  return ( 
    <div>
      <form>
        <label>
          Enter Date:
          <input onChange={handleChange} name="date" value={data.date}></input>
        </label><br/>

        <label>
          Enter Time:
          <input onChange={handleChange} name="time" value={data.time}></input>
        </label><br/>

        <label>
          Enter Type of Time to Use:
          <input onChange={handleChange} name="typeOfTime" value={data.typeOfTime}></input>
        </label><br/>

        <label>
          Enter Amount of Time to Use:
          <input onChange={handleChange} name="amount" value={data.amount}></input>
        </label><br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={props.setToggle}>Cancel</button>
      </form>
    </div>
   );
}

export default ReqForm;