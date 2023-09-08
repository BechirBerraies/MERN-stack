import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Hero2 = (props) => {
    const [hero, setHero] = useState()
    const {heroID} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        
        axios.get(`https://swapi.dev/api/planets/${heroID}`)
            .then(response => {
                setHero(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
                navigate('/error')
            }
            )
    }, [heroID])
    return (
        <div>
            {hero ?
                <>
                    <h1>
                        {hero.name}
                    </h1>
                    
                </>
                :
                <h4>Loading ..... </h4>}
                <hr />

        </div>
    )
}

export default Hero2