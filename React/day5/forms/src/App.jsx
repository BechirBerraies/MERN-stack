import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <fieldset>
        <legend><h1>App.jsx fire fire fire fire </h1></legend>
        <Form/>
        
        <form action="post">
          <p>Username: <input type="text"
          onChange={(elementItSelf)=>{}}
          ></input></p>
          <p>Age: <input type="number"></input></p>
          <p>Favorite Food: <input type="text"></input></p>
          <br />
          <button>Submit</button>
        </form>
      </fieldset>
    </>
  )
}

export default App
