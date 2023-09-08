// EXPRESS IMPORTATION 
const express = require("express")
const PORT=8000
const app = express()


// FAKER IMPORTATION 

// ESM
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const User = [{
        user_id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phonenumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    }];
    return User;
};

const createCompany = () => {
    const Company = {
        company_id: faker.string.uuid(),
        CompanyName: faker.internet.userName(),
        address : {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country ()
            }
    };
    return Company;
};


 // 1- READ ALL
 app.get("/api/User",(req,res)=>{
    res.json({User,status:200})
})
 // 1- READ ALL
 app.get("/api/Company",(req,res)=>{
    res.json({Company,status:200})
})
 // 1- READ ALL
 app.get("/api/User/Company",(req,res)=>{
    res.json({Company,User,status:200})
})

    




const User = createUser();
const Company = createCompany();
console.log(User,Company);






app.listen(PORT, ()=>{
    console.log(`>>>>SERVER IS RUnNING ON PORT ${PORT}<<<<< `);
 })