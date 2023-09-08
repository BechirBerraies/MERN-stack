import { useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const Display2 = (props) => {

    const axiosAPI2 = ()=>{
        axios.get("https://swapi.dev/api/people")
        .then(response => {
          console.log("AXIOS RESPONSE",response)
        props.setpeoplelist(response.data.results)
        })
        .catch(error=>console.log(error))
        console.log();
      }





  return (
    

    <fieldset>
    <legend><h1>Star Wars  People ✰</h1></legend>
    
    <button onClick={axiosAPI2}>Axios API</button>


    {props.peoplelist.map((poké,idx)=>(
    
      
        <h1 key={idx}>{poké.name} </h1>
    ))}




  </fieldset>




  )
}

export default Display2