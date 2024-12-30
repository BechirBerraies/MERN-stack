const Marchandise = require('../models/marchandise.model')

module.exports= {
    findAll: (req,res)=>{
        Marchandise.find().populate('user')
        .then(databaseResponse =>{
            console.log("DATABASE RESPONSE TO FIND ALL :",databaseResponse)
            res.status(200).json(databaseResponse)

        })
        .catch(databaseError=>{
            console.log("DATABASE ERROR FIND ALL: ", databaseError )
            res.status(400).json(databaseError)
        })
    },

    findOne:(req,res)=>{
        Marchandise.findById(req.params.id)
        .then(databaseResponse=>{
            console.log("DATABASE RESPONSE : ",databaseResponse)
            res.status(200).json(databaseResponse)
        })
        .catch(databaseError=>{
            console.log("DATABASE ERROR", databaseError)
            res.status(400).json(databaseError)
        })
    },

    create: (req,res)=>{
        Marchandise.create(req.body)
        .then(databaseResponse =>{
            console.log("DATABASE RESPONSE:",databaseResponse)
            res.status(201).json(databaseResponse)
        })
        .catch(databaseError=>{
            console.log("DATABASE ERROR FIND ALL: ", databaseError )
            res.status(400).json(databaseError.errors)
        })
    },

    update:(req,res)=>{
        Marchandise.findByIdAndUpdate(req.params.id,req.body, {new: true,runValidators:true})
        .then(databaseResponse=>{
            console.log("DATABASE RESPONSE:",databaseResponse)
            res.status(200).json(databaseResponse)
        })
        .catch(databaseError=>{
            console.log("DATABASE ERROR : ", databaseError )
            res.status(400).json(databaseError)
        })
    },

    delete:(req,res)=>{
        Marchandise.findByIdAndDelete(req.params.id)
        .then(databaseResponse=>{
            console.log("DATABASE RESPONSE:",databaseResponse)
            res.status(200).json(databaseResponse)
        })
        .catch(databaseError=>{
            console.log("DATABASE ERROR FIND ALL: ", databaseError )
            res.status(400).json(databaseError)
        })
    }
}