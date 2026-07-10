import React, { useEffect, useState } from 'react'
import { NaviBar } from './NaviBar'
import axios from 'axios'

const ViewPatients = () => {

    const[data,changeData]=useState([])
    const fetchData=() =>{

      axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(

            (Response)=>
              changeData(Response.data)

      ).catch()
    }
    useEffect(
      ()=>{
        fetchData()
      },[]
    )
  return (
    <div>
        <NaviBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col xl-12 col-xxl-12">

                        <div className="row">
                           <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                          <table class="table">
  <thead>
    <tr>
      <th scope="col">Patient ID</th>
      <th scope="col">name</th>
      <th scope="col">Age</th>
      <th scope="col">gender</th>
      <th scope="col">Bloodgroup</th>
      <th scope="col">Doctor</th>
      <th scope="col">disease</th>
      <th scope="col">room no</th>
      <th scope="col">AdmissonDate</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
                            {data.map(
                                (value,index)=>{
                                        return(
                                            
                                   
    <tr>
      <th scope="row">{value.patientId}</th>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.gender}</td>
      <td>{value.bloodGroup}</td>
      <td>{value.doctor}</td>
      <td>{value.disease}</td>
      <td>{value.roomNo}</td>
      <td>{value.admissionDate}</td>
      <td>{value.mobile}</td>
    </tr>
   
                                        )
                                    }
                            )}
                            
  </tbody>
</table>
                                      
                                        </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewPatients