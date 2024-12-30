import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Marchandises from './Marchandises'
const MarchandisesList = (props) => {
  const [Marchandisess, setMarchandisess] = useState([])
  const deleteMarchandises = (id) => {
    console.log("Marchandises ID = ",id, "WILL Be deleted");
    axios.delete(`http://localhost:8000/api/Marchandises/${id}`)
    .then(response=> {
      console.log(response)
      const filteredMarchandisess = Marchandisess.filter(Marchandises => Marchandises._id != id)
      setMarchandisess(filteredMarchandisess)
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/Marchandises')
      .then(serverResponse => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        setMarchandisess(serverResponse.data)
      })
      .catch(serverError => {
        console.log("SERVER ERROR : ", serverError);
      })
  }, [])
  return (
    <div className=''>
      {/* <h2>{JSON.stringify(Marchandisess)}</h2> */}
      {Marchandisess.map(Marchandises=> <Marchandises key={Marchandises._id} Marchandises={Marchandises} deleteMarchandises={deleteMarchandises}/>)}
      {/* <Marchandises /> */}
    </div>
  )
}

export default MarchandisesList