import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const AuthorForm = (props) => {

const navigate = useNavigate()
const [Author,SetAuthors]=useState({Name:""})
const [errors, setErrors] = useState({Name:""})
const formHandler = (e)=>{
    e.preventDefault()
    console.log("SUBMITTED Author ",Author)
    axios.post("http://localhost:8000/api/author",Author)
    .then(serverResponse => {
        console.log(serverResponse);
        SetAuthors({Name:""});
        navigate('/')
    })
    
    
    .catch(error=> {
        const errs = {Name:''}
        for(let key of Object.keys(error.response.data)){
            errs[key]=error.response.data[key].message
        }
        console.log(error)
        setErrors({...errors,...errs})

    })

}

  return (

    <fieldset>
        <legend>The Form</legend>
        <Link to={'/'}> Home </Link>
    
    <form onSubmit={formHandler}>

        <p>Name<input type="text" 
            onChange={(e)=> SetAuthors({...Author,Name:e.target.value})}
            value={Author.Name}
            /></p>
        {errors.Name && <span className='text-danger h5'>{errors.Name}</span>}
        <button type='submit'>Submit</button>
    </form>
    </fieldset>
  )
}

export default AuthorForm