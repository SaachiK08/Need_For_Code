const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    collegeid:{
        type:Number,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    isverified:{
        type:Boolean,
        default:false
    },
    mobilenumber:{
        type:Number,
        required:true
    }
})


module.exports = mongoose.model("User",user)