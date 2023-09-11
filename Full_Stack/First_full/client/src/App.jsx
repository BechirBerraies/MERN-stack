import { useState } from 'react'
// import './App.css'
import  {Routes, Route} from 'react-router-dom'
import AddPerson from './assets/components/addperson'
import AllPeople from './assets/components/allpeople'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
          <AddPerson/>
          <AllPeople/>
        </>
      }/>
    </Routes>


    </>
  )
}
export default App;