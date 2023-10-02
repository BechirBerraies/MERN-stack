const {modelname} = require('../models/model');



module.exports={


    findAll:(req,res)=>{
        modelname.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    create:(req,res)=>{
        modelname.create(req.body)
        .then(response=>res.status(201).json(response))
        .catch(error=>res.status(400).json(error.errors))
    },
    finOne:(req,res)=>{
        modelname.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    update:(req,res)=>{
        modelname.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    delete:(req,res)=>{
        modelname.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    }
}
