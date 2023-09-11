const { response } = require('express');
const Person = require('../models/person.model');

module.exports={
finAllPeople:(req,res)=>{
    Person.find()
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(400).json(error))
},
finOnePerson:(req,res)=>{
    Person.findOne({_id:req.params.id})
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(404).json(error))
},
createPerson:(req,res)=>{
    Person.create(req.body)
    .then(response=>res.status(201).json(response))
    .catch(error=>res.status(400).json(error))
},
updatePerson:(req,res)=>{
    Person.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(400).json(error))
},
deletePerson:(req,res)=>{
    Person.findOneAndDelete({_id:req.params.id})
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(400).json(error))
}
}
