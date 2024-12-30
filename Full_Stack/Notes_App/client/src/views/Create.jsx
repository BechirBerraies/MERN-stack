import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Create = (props) => {
    const navigate = useNavigate()
    const [Marchandises, setMarchandises] = useState({ title: "", content: "", isImportant: false })
    const [errors, setErrors] = useState({ title: "", content: "" })
    const createMarchandises = (newMarchandises) => {
        axios.post('http://localhost:8000/api/Marchandises', newMarchandises)
        .then(response => {
          console.log(response.data)
          navigate('/Marchandisess')
        })
        .catch(error => {
          const errs = { title: "", content: "" }
          for (let key of Object.keys(error.response.data)) {
            errs[key] = error.response.data[key].message
          }
          setErrors({ ...errors, ...errs })
        })
    }
  return (
    <div>
        <Form Marchandises={Marchandises} setter={setMarchandises} errors={errors} operation={createMarchandises}>Create</Form>
    </div>
  )
}

export default Create