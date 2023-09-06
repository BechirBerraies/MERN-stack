import React,{useState} from 'react'
import Display from './Display';

const Form = () => {

    const [username,Setusername]= useState("");
    const[age,setAge]=useState(18);
    const[favFood,setFavFood]=useState("");
    const user = {hisName:"",hisAge:18,hisFavFood:""}
    const formHandler = (e) => {
        e.preventDefault()
        console.log(e);
        // const Newuser = {username,age,favFood}
        user.hisName= username
        user.hisAge=age
        user.hisFavFood=favFood
        // e.target.reset()
        // user ={...Newuser}
        setAge(18)
        Setusername("")
        setFavFood("")
    }
    



  return (
    <fieldset>
        <legend>
            <h2>Form</h2>
        </legend>
        <hr />
        <h4>Username : {username}<br />
            Age:  {age}<br />
            FavFood: {favFood}<br />
        </h4>
    <form onSubmit={formHandler}>
        <p>Username : <input onChange={(e)=>Setusername(e.target.value)} value={username}/></p>
        <p>Age : <input onChange={(e)=>setAge(e.target.value)} value={age}/></p>
        <p>FavFood : <input onChange={(e)=>setFavFood(e.target.value)} value={favFood}/></p>
        <button input="submit" >Create User</button>
    </form>
    <Display username={username} age={age} favFood={favFood} user={user}/>

    </fieldset>

  )
}

export default Form