import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Allproducts = (props) => {
    const [Product,SetProduct]=useState([])
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product")
        .then(serverResponse =>{
        
        console.log(serverResponse)
        SetProduct(serverResponse.data)
        })
        .catch(serverError=> console.log(serverError))
    },[])

  return (

    <fieldset>
        <legend>All products</legend>
        {Product.map(product =><div key={product._id}>
            <Link to={`/${product._id}`}>{product.Title} </Link>
            </div>)}
    </fieldset>
  )
}

export default Allproducts