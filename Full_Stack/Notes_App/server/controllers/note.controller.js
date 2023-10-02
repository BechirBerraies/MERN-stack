const Note = require('../models/note.model')

module.exports= {
    findAll: (req,res)=>{
        Note.find().populate('user')
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
        Note.findById(req.params.id)
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
        Note.create(req.body)
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
        Note.findByIdAndUpdate(req.params.id,req.body, {new: true,runValidators:true})
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
        Note.findByIdAndDelete(req.params.id)
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