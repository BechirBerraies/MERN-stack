import React,{useState} from 'react'
import axios from 'axios'



const ProductForm = (props) => {
const [Product,SetProduct]=useState({Title: "", Price: 10, Description: "" })
const formHandler = (e)=>{
    e.preventDefault()
    console.log("SUBMITTED Product ",Product)
    axios.post("http://localhost:8000/api/product",Product)
    .then(serverResponse => {
        console.log(serverResponse);
        // Reset the state after a successful submission
        SetProduct({ Title: "", Price: 10, Description: "" });
      })
    
    
    .catch(serverError=> console.log(serverError))

}

  return (
    <fieldset>
        <legend>The Form</legend>
    
    <form onSubmit={formHandler}>
        <p>Title<input type="text" 
            onChange={(e)=> SetProduct({...Product,Title:e.target.value})}
            value={Product.Title}
            /></p>

        <p>Price<input type="number" 
            onChange={(e)=> SetProduct({...Product,Price:e.target.value})}
            value={Product.Price}
            /></p>
            
            <p>Description<input type="text" 
            onChange={(e)=> SetProduct({...Product,Description:e.target.value})}
            value={Product.Description}
            /></p>
        <button type='submit'>Submit</button>
    </form>
    </fieldset>
  )
}

export default ProductForm