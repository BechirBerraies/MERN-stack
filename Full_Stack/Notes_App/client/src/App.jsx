import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./components/Nav"
import MarchandisesList from './components/MarchandisesList'
import MarchandisesShow from './components/MarchandisesShow'
import MarchandisesCreate from './components/MarchandisesCreate'
import MarchandisesEdit from './components/MarchandisesEdit'
import Edit from './views/Edit'
import Create from './views/Create'
function App() {
  const baseUrl = "http://localhost:8000/api"
  return (
    <div className="container mt-3">
      <Nav />
      {/* ROUTES */}
      <Routes>
        {/* Marchandisess List route */}
        <Route path='/Marchandisess' element={<MarchandisesList/>}/>
        {/* One Marchandises Route */}
        <Route path='/Marchandisess/:id' element={<MarchandisesShow baseUrl={baseUrl}/>}/>
        {/* Create Marchandises Route */}
        {/* <Route path='/Marchandisess/new' element={<MarchandisesCreate/>}/> */}
        <Route path='/Marchandisess/new' element={<Create/>}/>
        {/* Edit Marchandises Route */}
        {/* <Route path='/Marchandisess/:id/edit' element={<MarchandisesEdit/>}/> */}
        <Route path='/Marchandisess/:id/edit' element={<Edit/>}/>
        {/* GARD ROUTE */}
        <Route path='*' element={<Navigate to='/Marchandisess' replace/>}/>
      </Routes>
    </div>
  )
}

export default App