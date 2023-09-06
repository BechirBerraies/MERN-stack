import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Pokemon, setPokemon] = useState([])
  const fetchAPI= ()=>{

    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then(response =>response.json())
    .then(jsonResponse=>{
      console.log(jsonResponse)
    setPokemon(jsonResponse.results)
  })
  .catch(error=>console.log(error))


  }
  return (
    <>
    <fieldset>
      <legend><h1>Pokémon application🐙</h1></legend>
      <button onClick={fetchAPI}>Fetch</button>


      {Pokemon.map((poké,idx)=>
      <ul>
       <li>

        {poké.name}
        </li> 
        

      </ul>
      
       
      
      )}

    </fieldset>
    </>
  )
}

export default App
