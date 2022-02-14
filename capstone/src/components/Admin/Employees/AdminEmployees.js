import React, { useState, useContext, useEffect } from 'react'
import { MasterContext } from '../../../context/MasterContext'
import AdminEmployee from './AdminEmployee'


function AdminEmployees() {
  const { getEmps, emps } = useContext(MasterContext)
  const [employee, setEmployee] = useState({ employee: "", emp: []})

  function getAllEmployees() {
    getEmps()
  }
  
  function handleSelectChange(e) {
    setEmployee(prev => ({
      ...prev,
      employee: e.target.value
    }))

  }

  function selectChange(e) {
    handleSelectChange(e)
    filterEmps(e.target.value)
  }

  function filterEmps(id) {
    let empInfo = emps.filter(x => x._id === id)
    setEmployee(prev => ({
      ...prev,
      emp: empInfo
    }))
  }

  useEffect(() => {
    getAllEmployees()
  }, [])

  return (
    <div>
      {/* <button onClick={getAllEmployees}>Employees</button> */}
      <label>
        <select onChange={selectChange}>
          <option>Select an Employee</option>
          {emps ? emps.map(x => <option
            id={x._id}
            key={x._id}
            value={x._id}
          >{x.firstName + " " + x.lastName}
          </option>) : ""}
        </select>
      </label>

      {employee.emp.length > 0 ?
        <AdminEmployee
          key={employee.emp[0]._id}
          id={employee.emp[0]._id}
          name={`${employee.emp[0].firstName} ${employee.emp[0].lastName}`}
          dateOfHire={employee.emp[0].dateOfHire}
          phone={employee.emp[0].phone}
          email={employee.emp[0].email}
          dob={employee.emp[0].dob}
          ssn={employee.emp[0].ssn}
        />

        : ""}

    </div>
  );
}

export default AdminEmployees;