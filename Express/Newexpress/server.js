// 1- bring express Here
const express = require("express")
// the is a global variable
const PORT=8000


// 2- invoke the function express and save the return in the variable called app
 const app = express()

 //MIDDLEWARE TO MAKE OUR SERVER READ JSON

 app.use( express.json() );
 app.use( express.urlencoded({ extended: true }) );


 // *Routing**
 const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

 //.-----CRUD------------
 //!SAME ROUTES DIFFERENT VERBS
 //!ALL SERVER ROUTES MUST START WITH /API
 // 1- READ ALL
 app.get("/api/users",(req,res)=>{
        res.json({users,status:200})
    })


 //2 - READE ONE 
    app.get("/api/users/:id",(req,res)=>{
        console.log(req.params);
        const {id}= req.params
        res.json(users[id])
    })

    // CREATE USER 
app.post("/api/users",(req,res)=>{
    console.log(req.body,"🤘🏻");
    users.push(req.body)
    res.json({message:"USER CREATE 🇹🇳"})
})

//4 - DELETE USER BY INDEX 
app.delete("/api/users/:id",(req,res)=>{
    const {id}= req.params
    const deleteUser = users[id]
    users.splice(id,1);
    res.json({deleteUser,message:"DELETED USER"})
    console.log({deleteUser,message:"USER DELETED 🚭"});
})
//5 - UPDATE USER BY INDEX 
app.put('/api/users/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.json({message:"USER UPDATED 🙃"})
    users[req.params.id]= {...users[req.params.id],...req.body}
})

 // 3- run the server

app.listen(PORT, ()=>{
    console.log(`>>>>SERVER IS RUnNING ON PORT ${PORT}<<<<< `);
 })