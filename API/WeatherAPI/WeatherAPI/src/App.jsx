import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GiveIp from './components/GiveIp'
import Weather from './components/Weather'




function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<GiveIp/>}></Route>
      </Routes>
    </>
  )
}

export default App
