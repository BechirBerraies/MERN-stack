import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './Weather';
import './GiveIp.css';



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

useEffect(() => {
    const sendSoapRequest = async () => {
      try {
        const response = await axios.post('http://localhost:8000/proxy',{
          countryCode: IPadress.countryCode 
        });
        console.log('SOAP Response:', response.data);
        const soapResponse = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(soapResponse, 'text/xml');
        const imageUrl = xmlDoc.getElementsByTagName('m:CountryFlagResult')[0].textContent;
        SetFlag(imageUrl);
      } catch (error) {
        console.error('Error making SOAP request:', error);
      }
    };

    if (IPadress.country) {
      sendSoapRequest();
    }
  }, [IPadress.country , IPadress.countryCode]); 




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
    <img src={Flag} alt={Flag} />


    <div>
      <Weather lon={IPadress.lon} lat={IPadress.lat} />
    </div>

    </div>
  )
}

export default GiveIp
