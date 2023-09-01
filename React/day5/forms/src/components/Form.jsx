import React,{useState} from 'react'

const Form = () => {
    const [username, setUsername]= useState("")
    const [age, setAge]= useState(18)
    const [favFood, setFavFodd]= useState("")
  return (
    <fieldset>
        <legend>My Form</legend>
        <hr />
        <h4>
        Username from state :{JSON.stringify(username)} <br />
        Age from state :{JSON.stringify(age)} <br />
        FavFood from state :{JSON.stringify(favFood)} <br />
        </h4>
        <hr />
    </fieldset>
  )
}

export default Form