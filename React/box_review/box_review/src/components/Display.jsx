import React,{Component} from 'react'
import BoxStyleForm from './BoxStyleForm'

const Display = (props) => {
  return (
    <fieldset>
    <legend>Display.jsx</legend>

    <div style={{display:"flex" , flexWrap:"wrap" , flexDirection:"row"}}>
    {props.colors.map((oneColor,index)=>{
      <div key={index} style={{backgroundColor: oneColor,width:"100px",height:"100px"}}>

      </div>
    })}

    </div>
    <BoxStyleForm colors={colors} setColors={setColors}/>
  </fieldset>
  )
}

export default Display