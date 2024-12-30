import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'

const Edit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [Marchandises, setMarchandises] = useState({ title: "", content: ""})
  const [errors, setErrors] = useState({ title: "", content: "" })
  const updateMarchandises = (Marchandises) => {
    // e.preventDefault()
    axios.put(`http://localhost:8000/api/Marchandisess/${id}`, Marchandises)
      .then(response => {
        console.log(response.data)
        navigate('/Marchandisess')
      })
      .catch(error => {
        console.log("Errors from Backend", error.response.data);
        console.log(Object.keys(error.response.data));
        const errs = { title: "", content: "" }
        for (let key of Object.keys(error.response.data)) {
          errs[key] = error.response.data[key].message
        }
        console.log(errs);
        setErrors({ ...errors, ...errs })
      })
  }
  useEffect(()=> {
    axios.get(`http://localhost:8000/api/Marchandisess/${id}`)
    .then(response => {
      console.log(response);
      setMarchandises(response.data)
    })
    .catch(error => console.log(error))
  }, [id])
  return (
    <div>
        <Form  Marchandises={Marchandises} setter={setMarchandises} errors={errors} operation={updateMarchandises}>Update</Form>
    </div>
  )
}

export default Edit