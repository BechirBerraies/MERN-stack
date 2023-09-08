import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Display from './components/Display'
import Display2 from './components/display2'
import { Routes, Route,Link } from 'react-router-dom'
import FormComponent from './components/Form'



function App() {
  const [Pokemonlist, setPokemonlist] = useState([]);
  const[peoplelist,setpeoplelist]= useState([]);

  

  return (
    <>
    <fieldset>
        <legend>The First input </legend>
        <Display Pokemonlist={Pokemonlist} setPokemonlist={setPokemonlist}/>
        <Display2 peoplelist={peoplelist} setpeoplelist={setpeoplelist}/>
        <FormComponent/>


        <Routes>

        <Route path='/people/:heroID' element={<Display/>}/>

        </Routes>


    </fieldset>




    </>
  )
}

export default App
