import React,{useState} from 'react'
import Nav from '../components/homepage/Nav'
import RegisterTeacher from '../components/registration/RegisterTeacher'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterProf = () => {


  const [teacher, setTeacher] = useState({email:"",password:"",subject:""})
  const navigate = useNavigate()

  const register = (e, newUser)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/teacher/register', newUser, {withCredentials:true})
    .then(serverResponse=> {
        console.log(serverResponse)
        navigate('/teacher')
    })
    .catch(error=>console.log(error))


}



  return (



    <>
    <Nav/>

    <RegisterTeacher operation={register} user={teacher} setter={setTeacher}/>





    </>






  )
}

export default RegisterProf