import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductById from './components/ProductById'
import { Routes, Route } from 'react-router-dom';

import ProductForm from './components/ProductForm'
import Allproducts from './components/Allproducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={
        <div>
        <ProductForm />
        <Allproducts />
      </div>
      } path="/"/>
      <Route element={<ProductById/>} path='/:id'/>
    </Routes>
    </>
  )
}

export default App
