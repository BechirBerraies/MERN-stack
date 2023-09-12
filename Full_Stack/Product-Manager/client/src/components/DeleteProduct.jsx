import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const DeleteProduct = (props) => {

    
    const theDeleteProduct = (id) => {
        
        console.log(id)
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res);
                console.log(props);
            })
            .catch(err => console.error(err));
    }

return (
    <div>
        <button onClick={()=> theDeleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default DeleteProduct