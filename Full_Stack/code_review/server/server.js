const express = require("express");
const app = express();
const PORT = 8000;
const DB = "pets_db";

app.use( express.json() ,express.urlencoded({ extended: true })) ;

require("./config/mongoose.config")(DB)
require()

app.listen(PORT,()=> console.log(`>>>>>>> SERVER IS RUNNING ont ${PORT} <<<<<<<`))