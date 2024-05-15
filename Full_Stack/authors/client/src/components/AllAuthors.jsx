import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const AllAuthor = (props) => {
    const [authors,SetAuthors]=useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/author")
        .then(serverResponse =>{ 
        console.log(serverResponse.data)
        SetAuthors(serverResponse.data)
        })
        .catch(serverError=> console.log(serverError))
    },[])


const removeFromDom = authorId => {
    SetAuthors(authors.filter(author => author._id != authorId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                console.log(res)
                const removeFromDom=  authors.filter(author => author._id != authorId)
                SetAuthors(removeFromDom)
                

            })
            .catch(err => console.error(err));
    }



return (

    <fieldset>
        <legend>All Authors</legend>
        <Link to={'/author'}>Create Author</Link>
        <table>
            <thead>
                <tr>
                    <th>Authors</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author=>
                    <tr key={author._id}>
                        <td>{author.Name}</td>
                        <td>
                            <Link to={`/${author._id}/edit`}>Edit</Link>
                            <button
                            onClick={()=>{deleteAuthor(author._id)}}
                            
                            >Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

    </fieldset>
  )
}

export default AllAuthor