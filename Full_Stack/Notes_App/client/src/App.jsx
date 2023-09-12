import Nav from "./components/Nav"
import {Routes,Route,Navigate} from 'react-router-dom'
import NoteList from "./components/NoteList"
import Note from "./components/Note"
import NoteCreate from "./components/NoteCreate"
import NoteEdit from "./components/NoteEdit"

function App() {

  return (
    <div className='container mt-3'>
      <Nav/>
      <Routes>
        {/* NOTES LIST ROUTES */}
        <Route path="/notes" element={<NoteList/>}/>
        {/* ONE  NOTE ROUTES */}
        <Route path="/notes/:id" element={<Note/>}/>
        {/* CREATE NOTE ROUTES */}
        <Route path="/notes/new" element={<NoteCreate/>}/>
        {/* EDIT NOTE ROUTES */}
        <Route path="/notes/:id/edit" element={<NoteEdit/>}/>
        {/* GUARD ROUTE */}
        <Route path="*" element={<Navigate to ='/notes' replace />}/>
      </Routes>
    </div>
  )
}

export default App
