import React, { useState } from 'react'

const BoxStyleForm = () => {
    const [color,Setcolor]= useState("");
    const [width,setwidth]=useState("");
    const[height,setHeight]=useState("");
    const[boxes,setBoxes]=useState([]);

    const handleColorChange= (e)=>{
        Setcolor(e.target.value)
    }
    const handleWidthChange= (e)=>{
        setwidth(e.target.value)
    }
    const handleHeightChange= (e)=>{
        setHeight(e.target.value)
    }

    const HandleSubmitInput= (e)=>{
        e.preventDefault();
        if(color && width && height){
            const New = {
                color,
                width: width,
                height: height
            };

            setBoxes = ([...boxes,newBox]);
            Setcolor(''),
            setwidth(''),
            setHeight('')
        }
    }

return (
    <fieldset>
        <legend>Form</legend>
        <form onSubmit={HandleSubmitInput}>
            <div>
            <label >Color : </label>
            <input type="color" value={color} onChange={handleColorChange}/>
            </div>
            <div>
                <label >Width (px) : </label>
                <input type="number" value={width} onChange={handleWidthChange} />
            </div>
            <div>
                <label>Height (px): </label>
                <input type="number" value={height} onChange={handleHeightChange} />


            </div>
            <button>Add Box +</button>

            

        </form>
    </fieldset>
  )
}

export default BoxStyleForm