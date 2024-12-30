const mongoose = require('mongoose')

const CommerceSchema = new mongoose.Schema({
title:{
    type:String,
    required:[true,"Marchandise Title is required 👍👍👍👍"],
    minlength:[3,"Min must be at least 3 characters 🪢🪢🪢🪢🪢"]
},
content:{
    type:String,
    required:[true,"Content must be present 🧶🧶🧶🧶"],
    minlength:[10,"Content is too short 🥾"]
},
isImportant: {
    type:Boolean,
    default:false
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
}

}, {timestamps:true})

const Marchandise = mongoose.model('Marchandise', CommerceSchema);
module.exports = Marchandise