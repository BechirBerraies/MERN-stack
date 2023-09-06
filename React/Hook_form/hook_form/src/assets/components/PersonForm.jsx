import React,{useState} from 'react'

const PersonForm = (props) => {
    
    
    
    const [firstname,Setfirstname]= useState("");   
    const [firstnameError, setfirstnameError] = useState("");

    const[lastname,Setlastname]= useState("");
    const [lastnameError, setlastnameError] = useState("");

    const[email,Setemail]= useState("");
    const[emailError,SetemailError]= useState("");
    
    const [password,Setpassword]= useState("");
    const [passworderror,Setpassworderror]= useState("");

    const [confirmpassword,Setconfirmpassword]= useState("");
    const [confirmpassworderror,Setconfirmpassworderror]= useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    const Verifyfirstname = (e)=>{
        Setfirstname(e.target.value)
        if(e.target.value.length<4){
            setfirstnameError("First Name too short")
        }
        else{
            setfirstnameError("")
        }
    }
    const Verifylastname = (e)=>{
        Setlastname(e.target.value)
        if(e.target.value.length<4){
            setlastnameError("Last Name too short")
        }
        else{
            setlastnameError("")
        }
    }
    const VerifyEmail = (e)=>{
        Setemail(e.target.value)
        if(e.target.value.length<4){
            SetemailError("Email too short")
        }
        else{
            SetemailError("")
        }
    }
    const VerifyPassword = (e) => {
        Setpassword(e.target.value)
        if(e.target.value.length<8){
            Setpassworderror("Password too short")
        }
        else{
            Setpassworderror("")
        }
    }
    const VerifyConfirmPassword = (e) =>{
        console.log({password});
        Setconfirmpassword(e.target.value)
        if(e.target.value !== password){
            Setconfirmpassworderror("Not the Same password")
        }
        else{
            Setconfirmpassworderror("")
        }
    }

    


    return (
        <>
        <fieldset>
            <legend>THE FORM </legend>
            
    <form onSubmit={createUser}>
        <p>Firstname : <input 
                onChange={(e)=>Verifyfirstname(e)}
                value={firstname}
                /></p>
                <p style={{color:"red"}}>{firstnameError}</p>
        <div>
            <label >lastname : </label>
            <input type="text" onChange={(e)=> Verifylastname(e)} value={lastname}/>
            <p style={{color:"red"}}>{lastnameError}</p>
        </div>
        <div>
            <label >Email : </label>
            <input type="text" onChange={(e)=> VerifyEmail(e)} value={email}/>
            <p style={{color:"red"}}>{emailError}</p>
        </div>
        <div>
            <label >password : </label>
            <input type="text" onChange={(e)=> VerifyPassword(e)} value={password}/>
            <p style={{color:"red"}}>{passworderror}</p>
        </div>
        <div>
            <label >Confirm password : </label>
            <input type="text" onChange={(e)=> VerifyConfirmPassword(e)} value={confirmpassword}/>
            <p style={{color:"red"}}>{confirmpassworderror}</p>
        </div>
        <input type="submit" value="Create User" />
        </form>
        <div>
            <h1>Your Form data</h1>
            <h2>FIRST NAME : {firstname}</h2>
            <h2>LAST NAME : {lastname}</h2>
            <h2>EMAIL : {email}</h2>
            <h2>PASSWORD : {password}</h2>
            <h2>CONFIRM PASSWORD: {confirmpassword}</h2>
        </div>
        </fieldset>
        </>
  )
}

export default PersonForm