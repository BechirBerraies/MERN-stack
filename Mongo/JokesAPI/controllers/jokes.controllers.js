const JokeModel = require('../models/jokes.models')



// GET ALL 
module.exports.findAllJokes = (req,res) => {
    JokeModel.find()
    .then(result => {
        console.log("ALL Jokes FROM DB : ",result,"😂😂😂😂")
        res.status(200).json(result)
    }
        )
        .catch(error=> res.status(400).json(error))
}


// GET ONE 
module.exports.findOneJoke = (req,res) => {
    console.log(req.params);
    JokeModel.findById({})
    .then(result => {
        console.log("ONE Joke FROM DB : ",result,"😂😂😂😂")
        res.status(200).json(result)
    }
        )
        .catch(error=> res.status(400).json(error))
}


//CREATE ONE 
const AllJokes = []

module.exports.createJoke = (req,res) => {
    console.log(req.body);
    JokeModel.create(req.body)
    
    
    .then(createResult=>{
        console.log(createResult)
        AllJokes.push(req.body._id)
        res.status(201).json(createResult)
        console.log(AllJokes,"THIS IS THE LIST 👺👺👺👺👺")
        
    })
    .catch(error=> res.status(400).json(error))

}

//UPDATE ONE 


module.exports.updateJoke = (req,res) => {
    JokeModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}


// DELETE ONE 


module.exports.deleteJoke = (req,res) => {
    JokeModel.deleteOne({_id:req.params.id})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}