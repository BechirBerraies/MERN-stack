const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = 8000;

// Middleware to parse JSON requests
app.use(express.json(), cors());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Proxy endpoint
app.post('/proxy', async (req, res) => {
  try {
    const soapEnvelope = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <CountryFlag xmlns="http://www.oorsprong.org/websamples.countryinfo">
          <sCountryISOCode>USA</sCountryISOCode>
        </CountryFlag>
      </soap:Body>
    </soap:Envelope>
    `;

    console.log("SOAP Envelope:", soapEnvelope);

    const response = await axios.post('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso', soapEnvelope, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });

    console.log("SOAP Response:", response.data);

    res.send(response.data);
  } catch (error) {
    console.error('Error making SOAP request:', error);
    res.status(500).json({ error: error.message });
  }
});
app.post('/degree', async (req, res) => {
  try {
    const soapEnvelope = `
      <?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="https://www.w3schools.com/xml/">
        <soap:Body>
          <tem:FahrenheitToCelsius>
            <tem:Fahrenheit>75</tem:Fahrenheit>
          </tem:FahrenheitToCelsius>
        </soap:Body>
      </soap:Envelope>
    `;

    console.log("SOAP Envelope:", soapEnvelope);

    const response = await axios.post('https://www.w3schools.com/xml/tempconvert.asmx', soapEnvelope, {
      headers: {
        'Content-Type': 'application/soap+xml',
      },
    });

    console.log("SOAP Degree Response:", response.data);

    res.send(response.data);
  } catch (error) {
    console.error('Error making Degree SOAP request:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});