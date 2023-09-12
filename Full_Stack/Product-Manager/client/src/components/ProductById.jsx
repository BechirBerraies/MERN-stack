import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductById = () => {
    const [Product,SetProduct]=useState({})
    const {id}= useParams();
        useEffect(()=> {
            axios.get("http://localhost:8000/api/product/"+id)
            .then(serverResponse =>{
            SetProduct(serverResponse.data)
            console.log(serverResponse)
            })
            .catch(serverError=> console.log(serverError))
        },[])
    
  return (
    <div>
        <p>{Product.Title}</p>
        <p>{Product.Price}</p>
        <p>{Product.Description}</p>
    </div>

  )
}

export default ProductById