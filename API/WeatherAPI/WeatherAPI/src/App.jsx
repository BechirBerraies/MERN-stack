import React, { useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import GiveIp from './components/GiveIp'
import Weather from './components/Weather'




function App() {


  return (
      <Routes>
      <Route path='/' element={<GiveIp/>}></Route>
      <Route path='/Weather' element={<Weather/>}></Route>
      </Routes>
  )
}

export default App
