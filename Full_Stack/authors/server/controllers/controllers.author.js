const Author = require('../models/models.author');


module.exports={


    findAllAuthors:(req,res)=>{
        Author.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createAuthor:(req,res)=>{
        Author.create(req.body)
        .then(response=>res.status(201).json(response))
        .catch(error=>res.status(400).json(error.errors))
    },
    finOneAuthor:(req,res)=>{
        Author.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateAuthor:(req,res)=>{
        Author.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteAuthor:(req,res)=>{
        Author.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    }

}

