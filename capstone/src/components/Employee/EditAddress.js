import React, {useContext} from 'react'
import axios from 'axios'
import { MasterContext } from '../../context/MasterContext'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function EditAddress(props) {
  const {user} = useContext(MasterContext)

  function handleInfoChange (e){
    const {name, value} = e.target
    props.setInfo(prev => ({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    const updates = {
      city: props.info.city,
      state: props.info.state,
      zipcode: props.info.zipcode
    }
    userAxios.put(`/employee/address/${user.employee}`, updates)
    .then(res => props.setToggle())
    .catch(err => console.log(err))
  }

  return ( 
    <div>
      <form>
        <label>
          Street:
          <input type='text' required name='street' value={props.info.street} onChange={handleInfoChange}></input>
        </label><br/>

        <label>
          City:
          <input type='text' required name='city' value={props.info.city} onChange={handleInfoChange}></input>
        </label><br/>

        <label>
          State:
          <select name='state' required value={props.info.state} onChange={handleInfoChange}>
            <option></option>
            <option value='AL'>AL</option>
            <option value='AK'>AK</option>
            <option value='AZ'>AZ</option>
            <option value='CA'>CA</option>
            <option value='CO'>CO</option>
            <option value='CT'>CT</option>
            <option value='DE'>DE</option>
            <option value='FL'>FL</option>
            <option value='GA'>GA</option>
            <option value='HI'>HI</option>
            <option value='ID'>ID</option>
            <option value='IL'>IL</option>
            <option value='IN'>IN</option>
            <option value='IA'>IA</option>
            <option value='KS'>KS</option>
            <option value='KY'>KY</option>
            <option value='LA'>LA</option>
            <option value='ME'>ME</option>
            <option value='MD'>MD</option>
            <option value='MA'>MA</option>
            <option value='MI'>MI</option>
            <option value='MN'>MN</option>
            <option value='MS'>MS</option>
            <option value='MO'>MO</option>
            <option value='MT'>MT</option>
            <option value='NE'>NE</option>
            <option value='NV'>NV</option>
            <option value='NH'>NH</option>
            <option value='NJ'>NJ</option>
            <option value='NM'>NM</option>
            <option value='NY'>NY</option>
            <option value='NC'>NC</option>
            <option value='ND'>ND</option>
            <option value='OH'>OH</option>
            <option value='OK'>OK</option>
            <option value='OR'>OR</option>
            <option value='PA'>PA</option>
            <option value='RI'>RI</option>
            <option value='SC'>SC</option>
            <option value='SD'>SD</option>
            <option value='TN'>TN</option>
            <option value='TX'>TX</option>
            <option value='UT'>UT</option>
            <option value='VT'>VT</option>
            <option value='VA'>VA</option>
            <option value='WA'>WA</option>
            <option value='WV'>WV</option>
            <option value='WI'>WI</option>
            <option value='WY'>WY</option>
          </select>
        </label><br/>

        <label>
          Zipcode:
          <input type='number' name='zipcode' required value={props.info.zipcode} onChange={handleInfoChange}></input>
        </label>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={props.setToggle}>Cancel</button>
    </div>
   );
}

export default EditAddress;