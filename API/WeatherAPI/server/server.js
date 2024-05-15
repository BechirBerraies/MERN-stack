const express = require('express');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

// Middleware to parse JSON requests
app.use(express.json(), cors(),bodyParser.json());


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
    const countryCode = req.body.countryCode;
    console.log("😃😃😃😃😃😃😃😃😃"+ req.body);
    const soapEnvelope = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <CountryFlag xmlns="http://www.oorsprong.org/websamples.countryinfo">
          <sCountryISOCode>${countryCode}</sCountryISOCode>
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
    console.log("😃😃😃😃😃😃😃😃😃"+ req.body.countryCode);
    console.log("SOAP Response:", response.data);

    res.send(response.data);
  } catch (error) {
    console.error('Error making SOAP request:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});