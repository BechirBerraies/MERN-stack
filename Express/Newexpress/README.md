tocuh server.js
npm init -y
npm install express
touch .gitignore
put node_modules in gitignore
go to server.js
paste the express boilerplate

////////////////////////////////////////


// Bring express Here 

const express = require("express")

//DEFINE THE PORT AS GLOBAL VARIABLE
const PORT = 8000

//2- invoke the function express (execute the function express) and save the return in variable called app

const app = express()

//3- Run the server 

app.listen(PORT, ()=>{
    console.log(`>>>SERVER IS RUNNING ON PORT ${PORT}<<<`);
})