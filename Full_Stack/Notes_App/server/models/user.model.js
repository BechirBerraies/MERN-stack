const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'User Name important !!!'],
        minlength:[3,"at least 3 letters 🇹🇳"]
    },
    email : {
        type: String,
        required:[true,"Email must exist🤖 "],
        validate:[isEmail,"Email not valid "]
        // validate:{
        //     validator: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        //     message: "PLEASE ENTER VALID "
        // }
    },
    password:{
        type:String,
        required:[true,"Password very required"],
        minlength:[6,"PAssword too short👌"]
    },




})
UserSchema.virtual('confirmPassword').get(()=>this._confirmPassword)
.set(value => this._confirmPassword = value);
UserSchema.pre('validate',function(next){
    console.log("INSIDE VALIDATE CONFIRM PASSWORD")
    console.log(`Password :${this.password}\n Confirm Password ${this.confirmPassword}`);
    if(this.password != this.confirmPassword){
        this.invalidate('confirmPassword','Password Must match ')

    }
    next()
})




UserSchema.pre('save', async function(next){
    console.log("Inside Pre Save Hook");
    try{
        const hashedPassword = await bcrypt.hash(this.password,10);
        console.log(`"PASSWORD TEXT : ", ${this.password}\n HASED PASSWORD : ${hashedPassword}`)
        this.password= hashedPassword
    }
    catch(error){
        console.log(error);
    }
    next()
})
const User = mongoose.model('User',UserSchema)
module.exports = User;