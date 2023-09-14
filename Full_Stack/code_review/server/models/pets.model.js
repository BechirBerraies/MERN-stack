const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is required"],
        minlength:[3,"Name must at least be 3 charchters long"]
    },
    specie:{
        type:String,
        require:[true,"Specie is required"],
        minlength:[3,"Specie must be at least 3 charachtters"]
    },
    breed:{
        type:String,
        require:[true,"Breed is required"],
        minlength:[3,"Breed must be 3 caracters long"]
    }
})

const Pet = mongoose.Model("Pet", PetSchema)
module.exports = Pet;