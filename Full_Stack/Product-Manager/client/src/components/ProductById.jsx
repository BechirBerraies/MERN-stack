import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <Link to={"/product/" + Product._id + "/edit"}>
        Edit
      </Link>
    </div>
    

  )
}

export default ProductById