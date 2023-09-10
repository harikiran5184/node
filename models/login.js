const mongoose = require('mongoose')

const loginSchema=mongoose.Schema({
    phoneno:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
})

let Login=module.exports=mongoose.model('usersData',loginSchema)