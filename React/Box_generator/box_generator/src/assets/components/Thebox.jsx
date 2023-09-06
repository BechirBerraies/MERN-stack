import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Thebox.css'





const Thebox = (props) => {

    const [color, setcolor] = useState("")


    const GiveColor= (e)=>{
        console.log(e.target.value);
        setcolor(e.target.value)

    }

    const CreateBox =(e) => {
        e.preventDefault();
        props.addbox(color)
    }





  return (
    <fieldset>
        <legend>Boxes</legend>
        <form onSubmit={CreateBox}  className='d-flex'>
            <h1>Color:  </h1>
            <input type="text" onChange={(e)=>GiveColor(e)} value={color}/>
            <button>Add Color</button>
        </form>
        
        



    </fieldset>
  )
}

export default Thebox