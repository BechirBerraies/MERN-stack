import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const MarchandisesCreate = (props) => {
  const navigate = useNavigate()
  const [Marchandises, setMarchandises] = useState({ title: "", content: "", isImportant: false })
  const [errors, setErrors] = useState({ title: "", content: "" })
  const createMarchandises = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/Marchandises', Marchandises)
      .then(response => {
        console.log(response.data)
        navigate('/Marchandises')
      })
      .catch(error => {
        // console.log("Errors from Backend", error.response.data);
        // console.log(Object.keys(error.response.data));
        const errs = { title: "", content: "" }
        for (let key of Object.keys(error.response.data)) {
          // console.log(key, "*****", error.response.data[key].message);
          errs[key] = error.response.data[key].message
        //   // setErrors({...errors,[key]:error.response.data[key].message})
        }
        console.log("ERRORS ", errs);
        setErrors({ ...errors, ...errs })
      })
  }
  return (
    <div>

      <form onSubmit={createMarchandises}>
        <div className="form-group mb-3">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control"
            onChange={(e) => setMarchandises({ ...Marchandises, title: e.target.value })}
            value={Marchandises.title}
          />
          {errors.title && <span className='text-danger h5'> {errors.title}</span>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Content</label>
          <textarea className="form-control"
            onChange={(e) => setMarchandises({ ...Marchandises, content: e.target.value })}
            value={Marchandises.content}
          ></textarea>
          {errors.content && <span className='text-danger h5'> {errors.content}</span>}

        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className='form-check-input mx-3'
            onChange={(e) => setMarchandises({ ...Marchandises, isImportant: e.target.checked })}
            value={Marchandises.isImportant}
          />
          <label className='form-check-label'>Is Important ?</label>
        </div>
        <div className='text-center'>
          <button className='btn btn-outline-primary w-50'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default MarchandisesCreate