const express = require('express');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
const { buildSchema } = require('graphql');

const { graphqlHTTP } = require('express-graphql');

// Middleware to parse JSON requests
app.use(express.json(), cors(),bodyParser.json());



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

// Define GraphQL schema
const schema = buildSchema(`
  type Query {
    temperature(kelvin: Float!): Float
  }
`);

// Define resolver functions
const root = {
  temperature: ({ kelvin }) => {
    celsius = kelvin -  273.15
    return celsius;
  }
};
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Enable GraphiQL interface for testing
}));


app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});