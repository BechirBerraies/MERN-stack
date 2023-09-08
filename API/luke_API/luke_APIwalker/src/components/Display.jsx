import React from 'react'
import axios from 'axios'
import { useEffect , useNavigate } from 'react'



const Display = (props) => {
   



   useEffect(() =>{
    

     axios.get("https://swapi.dev/api/people/${heroID}")
     .then(response => {
       console.log("AXIOS RESPONSE",response)
     props.setPokemonlist(response.data.results)
     })
     .catch(error=>
      console.log(error)
      
      )
     
   },[] )




    
  return (
    


    <fieldset>
      <legend><h1>Star Wars  Planets ✩</h1></legend>
      
      


      {props.Pokemonlist.map((poké,idx)=>(
      
        
          <h1 key={idx}>{poké.name} </h1>
      ))}




    </fieldset>
  )
}

export default Display