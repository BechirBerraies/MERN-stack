import React, { useState } from 'react'
import axios from 'axios'
import Weather from './Weather';
import './GiveIp.css';
const SOAP_ENDPOINT = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
const authozize ='Access-Control-Allow-Origin:'
function GiveIp() {

  const [IPadress, setIpadress] = useState({});
  const [Flag,SetFlag] = useState({})
  
  const handleUserInputChange = (e) =>
  {
    e.preventDefault();
    console.log(document.getElementById("IPadress").value);
    console.log(`http://ip-api.com/json/${document.getElementById("IPadress").value}`);
    axios.get("http://ip-api.com/json/"+ document.getElementById("IPadress").value )
    .then(response => {
      console.log("IPresponse RESPONSE",response)
    setIpadress(response.data)
    })
    .catch(error=>
      console.log(error),
    )
  };



  const sendSoapRequest = async () => {
    try {
      const response = await axios.post('http://localhost:8000/proxy');
      console.log('SOAP Response:', response.data);
      SetFlag(response.data)
    } catch (error) {
      console.error('Error making SOAP request:', error);
    }
  };




  return (
    <div className="give-ip-container">
    

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
    <button onClick={sendSoapRequest}>Get Country Flag</button>
    

    <div>
      <Weather lon={IPadress.lon} lat={IPadress.lat} />
    </div>

    </div>
  )
}

export default GiveIp
