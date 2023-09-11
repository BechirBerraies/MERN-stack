const Product = require('../models/product.models');


module.exports={


    findAllProducts:(req,res)=>{
        Product.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createProduct:(req,res)=>{
        Product.create(req.body)
        .then(response=>res.status(201).json(response))
        .catch(error=>res.status(400).json(error))
    }

}

