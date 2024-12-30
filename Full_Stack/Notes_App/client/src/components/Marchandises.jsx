import { Link } from 'react-router-dom'

const Note = ({ note, deleteNote }) => {
  // console.log(props);
  return (
    <div >
      <Link className='fst-italic text-dark h1' to={`/Marchandises/${note._id}`} style={{textDecoration:"none"}}>{note.isImportant && "📌"} {note.title}</Link>
      {/* <h1>{note.isImportant ? "📌":""} {note.title}</h1> */}
      <p className='fs-4'>
        {note.content}
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        <p>{note.createdAt}</p>
        <div>
          <Link
            to={`/Marchandises/${note._id}/edit`}
            className='btn btn-info mx-2'
            style={{ width: "100px", height: "40px" }} >
            Edit</Link>
          <button 
          onClick={() => deleteNote(note._id)}
          >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Note