import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllAuthor from './components/AllAuthors'
import {Routes,Route} from 'react-router-dom'
import AuthorForm from './components/CreateForm'
import EditForm from './components/EditAuthors'

function App() {




  return (





    <>
    <h1>Favorite Authors</h1>

    <Routes>
      <Route path='/' element={<AllAuthor  />}/>
      <Route path='/:id/edit' element={<EditForm/>} />
      <Route path='/author' element={<AuthorForm/>}></Route>
    </Routes>
    </>
  )
}

export default App
