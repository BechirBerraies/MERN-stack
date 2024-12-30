import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const MarchandisesShow = ({ baseUrl }) => {
    const { id } = useParams()
    const [Marchandises, setMarchandises] = useState({ title: "", content: "" })
    useEffect(() => {
        axios.get(baseUrl + "/Marchandisess/" + id)
            .then(response => {
                console.log(response.data);
            setMarchandises(response.data)
            })
            .catch(error=> console.log(error))
    }, [id])
    return (
        <div >
            <h1 className='fst-italic'>{Marchandises.isImportant && "📌"} {Marchandises.title}</h1>
            <p className='fs-4'>
                {Marchandises.content}
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <p>{Marchandises.createdAt}</p>
            </div>
        </div>
    )
}

export default MarchandisesShow