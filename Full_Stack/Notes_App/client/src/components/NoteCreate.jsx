import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const NoteCreate = (props) => {
    const [errors,SetErrors]= useState({title:"",content:"",})
    const navigate = useNavigate()
    const [note,setNote]= useState({title:"",content:"",isImportant:false})
    const createNote= (e) => {
        e.preventDefault()
        axios.post('localhost:8000/api/notes/',note)
        .then(response=>{
            
            console.log(response.date)
            navigate('/notes')
        })
        .catch(error=>{
            console.log("ERRORS FROM BACK END", error);
        } )
    }
  return (
    <div>
        <h4 className='bg-warning text-danger'>Note From State {JSON.stringify(note)}</h4>
    <form onSubmit={createNote}>
<div className="form-group mb-3">
    <label htmlFor="">Title</label>
    <input type="text" className="form-control"
    onChange={(e)=> setNote({...note,title:e.target.value})}
    value={note.title}
    />
    </div>
<div className="form-group mb-3">
    <label htmlFor="">Content</label>
    <textarea type="text" className="form-control" 
    onChange={(e)=> setNote({...note,content:e.target.value})}
    value={note.content}
    />
    </div>
<div className="form-group mb-3">
<input type="checkbox" className="form-check-input" 
onChange={(e)=> setNote({...note,isImportant:e.target.checked})}
value={note.isImportant}
/>
    <label className='form-check-label'>is Important ?</label>
</div>
<div>
<button className='btn btn-outline-primary'>Submit</button>
</div>
    </form>
    </div>
  )
}

export default NoteCreate