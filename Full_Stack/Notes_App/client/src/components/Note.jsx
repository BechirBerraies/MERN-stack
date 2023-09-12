import React from 'react'
import noteStyle from './Note.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Note = ({note, deleteNote}) => {
    
  return (

    <div className={noteStyle.note}>
        <h1>{note.title}</h1>
        <p>
            {note.content}
        </p>
        <div>
            <p>{note.created_at}</p>
            <button className={noteStyle.button_edit}>
            <Link to={`/notes/${note._id}/edit`} >Edit</Link>

            </button>
            <button className={noteStyle.button_delete} onClick={()=> deleteNote(note._id)}>Delete</button>
        </div>


    </div>
  )
}

export default Note