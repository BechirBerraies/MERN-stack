import React from 'react'
import {Link} from 'react-router-dom'
import noteStyle from './Note.module.css'

const Nav = (props) => {
    return (
    <div border-bottom>
        <div className={noteStyle.note}>
        <h1>Notes 👌</h1>

        </div>
        <div className="d-flex justify-content-around">
            <Link className='h2'>Home</Link>
            <Link className='h2'>Create</Link>
        </div>
    </div>
  )
}

export default Nav