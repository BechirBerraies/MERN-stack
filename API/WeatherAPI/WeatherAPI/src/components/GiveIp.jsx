import React, { useState } from 'react'
import './App.css'
import axios from 'axios'


function GiveIp() {

  const [IPadress, setIpadress] = useState({});
  
  const handleUserInputChange = (e) =>
  {
    e.preventDefault();
    console.log(document.getElementById("IPadress").value);
    console.log(`http://ip-api.com/json/${document.getElementById("IPadress").value}`);
    axios.get("http://ip-api.com/json/"+ document.getElementById("IPadress").value )
    .then(response => {
      console.log("AXIOS RESPONSE",response)
    setIpadress(response.data)
    })
    .catch(error=>console.log(error))
  };





  return (
    <>
    <h1>
      Hello let's click on this button and see the return 
    </h1>


    <form onSubmit={handleUserInputChange}>
  <input type="text" name="IPadress" placeholder="Yo" id="IPadress" />
  <input type="submit" value="Submit" />
    </form>

    <h2>Ip adress :  </h2>
      
    <h2>{IPadress.country}</h2>
    <h2>{IPadress.city}</h2>
    <h2>{IPadress.lan}</h2>
    <h2>{IPadress.lat}</h2>
    

    
    </>
  )
}

export default GiveIp
