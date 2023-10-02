import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'




const EditForm = (props) => {

const {id} = useParams()
const navigate = useNavigate({})
const [author,setAuthors]=useState({Name:""})

const updateNote = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/author/${id}`, author)
      .then(response => {
        console.log(response.data)
        navigate('/')
      })
    }

useEffect(()=>{
    axios.get(`http://localhost:8000/api/author/${id}`)
    .then(response => {
        console.log(response);
        setAuthors(response.data);
    
      })
      .catch(error => console.log(error))
    },[id])




  return (

    <fieldset>
        <legend>The Form</legend>
    
    <form onSubmit={updateNote}>
        <p>Name<input type="text" 
            onChange={(e)=> setAuthors({...author,Name:e.target.value})}
            check={author.Name}
            /></p>

        <button type='submit'>Submit</button>
    </form>
    </fieldset>
  )

}

export default EditForm