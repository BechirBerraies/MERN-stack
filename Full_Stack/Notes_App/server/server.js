const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()
const PORT  = 8000;
const DB = "CommercialDB" 
const cookies = require('cookie-parser')


//GLOBAL VARIABLES


app.use( express.json() ,
express.urlencoded({ extended: true }),
cors(),
cookies()
) ;


 require('./config/configs.mongoose')(DB)
 require('./routes/marchandise.routes')(app)
 require('./routes/users.routes')(app)

app.listen(PORT,()=>console.log('>>>SERVER IS RUNNING ON PORT ${PORT}<<<'))

