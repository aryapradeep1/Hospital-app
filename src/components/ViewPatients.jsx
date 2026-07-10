import React, { useEffect, useState } from 'react'
import { NaviBar } from './NaviBar'
import axios from 'axios'

const ViewPatients = () => {

  const [data, changeData] = useState([])

  const fetchData = () => {
    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NaviBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4 text-primary">
          🏥 View Patients
        </h2>

        <div className="row g-4">

          {data.map((value, index) => {
            return (

              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4"
                key={index}
              >

                <div className="card shadow-lg border-0 h-100">

                  <div className="card-header bg-primary text-white text-center">
                    <h5>{value.name}</h5>
                  </div>

                  <div className="card-body">

                    <p><strong>Patient ID :</strong> {value.patientId}</p>
                    <p><strong>Age :</strong> {value.age}</p>
                    <p><strong>Gender :</strong> {value.gender}</p>
                    <p><strong>Blood Group :</strong> {value.bloodGroup}</p>
                    <p><strong>Doctor :</strong> {value.doctor}</p>
                    <p><strong>Disease :</strong> {value.disease}</p>
                    <p><strong>Room No :</strong> {value.roomNo}</p>
                    <p><strong>Admission Date :</strong> {value.admissionDate}</p>
                    <p><strong>Mobile :</strong> {value.mobile}</p>

                  </div>

                  <div className="card-footer text-center">
                    <button className="btn btn-success">
                      View Details
                    </button>
                  </div>

                </div>

              </div>

            )
          })}

        </div>
      </div>

    </div>
  )
}

export default ViewPatients