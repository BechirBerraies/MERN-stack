import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const navigate = useNavigate()
  const [heroID, setHeroID] = useState(0)
  const searchHero = (e)=>{
    e.preventDefault()
    console.log("HERO ID : ", heroID);
    navigate(`/people/${heroID}`)
  }
  return (
    <form onSubmit={searchHero}>
      <label htmlFor="">HERO ID</label>
      <input className='form-control' type='number'
      onChange={(e)=> setHeroID(e.target.value)}
      value={heroID}
      />
      <button className='btn btn-success'>Search</button>
    </form>
  )
}

export default FormComponent