const mongoose =require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"First Name Is Required❌❌❌❌"],
        minlength:[3,"First Name must be greater than 3 characters"]
    },
    lastName:{
        type:String,
        required:[true,"last Name is required ❌❌❌❌"],
        minlength:[3,"First Name must be greater than 3 characters"]
    },
    age:{
        type:Number,
        required:[true,"{Path}is very required"],
        min:1,
        max:120
    },
    isFunny:{
        type:Boolean,
        default:false
    },


},{timestamps:true})

const Person = mongoose.model("Person",PersonSchema);
module.exports= Person
