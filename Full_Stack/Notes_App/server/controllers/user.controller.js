const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports= {

    register : async(req,res)=>{
        try {
            const user = new User(req.body)
            const newUser = await user.save()
            const userToken = jwt.sign({id:newUser._id}, SECRET)
            res.status(201)
            .json(newUser)
            .cookie("userToken", userToken,{httpOnly:true})

        }
        catch(error){
            res.status(400).json(error)
        }
    },






    login : async (req,res)=>{
            const userFromDB = await User.findOne({email:req.body.email})
            if(!userFromDB){
                res.status(404).json({error:"User Not Found"})
            } else {
                try{
                    const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password)
                    if(isPasswordValid){
                        const userToken = jwt.sign({id:newUser._id}, SECRET)
                        console.log(`USER ID ${newUser._id}\n userToken ${userToken}`);
                        res.status(200).cookie('userToken',userToken).json({message:"User Logged In successfully !!!! "})
                    }else{
                        res.status(400).json({message:"Password incorrect "})
                    }
                }
                catch(error){
                    res.status(400).json({message:'invalid Email/password',error})
                }
            }
        
    },
    logout : (req,res)=>{
        try{
            console.log("************",req.cookies.userToken,"***************");
            res.clearCookie("userToken")
            res.status(200).json({message:"User Logged Out successfully"})
            
        }catch(error){
            res.status(500).json({message : "Something went wrong ",error})
        }

    },
    getLoggedUser : async(req,res)=>{
        try{
            const userToken = req.cookies.userToken;
            const loggedUser = jwt.verify(userToken,SECRET)
            console.log(`userToken ${userToken}\n User Id : ${loggedUserId}`)
            const user = user.findOne({_id:loggedUserId.id})
            res.status(200).json({message:"User Found", user})

        }catch(error){
            res.status(500).json({message:"No token Provided"})
        }
    }
}