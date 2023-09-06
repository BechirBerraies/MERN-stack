import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [Pokemonlist, setPokemonlist] = useState([]);

  



const axiosAPI = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then(response => {
      console.log("AXIOS RESPONSE",response)
    setPokemonlist(response.data.results)
    })
    .catch(error=>console.log(error))
  } 


  
  return (
    <>
    <fieldset>
      <legend><h1>Pokémon application🐙</h1></legend>
      
      <button onClick={axiosAPI}>Axios API</button>

      {Pokemonlist.map((poké,idx)=>(
         <h1 key={idx}>{poké.name}</h1>
      ))}

    </fieldset>
    </>
  )
}

export default App