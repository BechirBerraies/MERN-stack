import React, { useState } from 'react'
import axios from 'axios'
import Weather from './Weather';
import './GiveIp.css';
const SOAP_ENDPOINT = 'Access-Control-Allow-Origin:http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
const authozize ='Access-Control-Allow-Origin:'
function GiveIp() {

  const [IPadress, setIpadress] = useState({});
  
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
    
    const soapEnvelope = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <CountryFlag xmlns="http://www.oorsprong.org/websamples.countryinfo">
          <sCountryISOCode>TN</sCountryISOCode>
        </CountryFlag>
      </soap:Body>
    </soap:Envelope>
    `;

    try {

      const response = await axios.post(authozize+  SOAP_ENDPOINT, soapEnvelope, {
        headers: {
          
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction': 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso',
          
        },
      });

      console.log('SOAP Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error making SOAP request0:', error.response.status, error.response.statusText);
      
      } else {
        console.error('Error making SOAP request2:', error.message);
      }
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
