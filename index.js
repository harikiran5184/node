const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://hari:hari@cluster0.1socvoq.mongodb.net/',{dbName:"project"}).then(()=>{console.log("Db connected")}).catch((err)=>{console.log("Error Occured")})

const Login = require('./models/login')
app.post('/login',async (req,res)=>{
    const {phoneno,password}=req.body
    try{
    let data=await Login.find({phoneno:phoneno,password:password})
    if(data.length>0){
        let enc=JSON.stringify(data)
        res.json({token:enc})
    }
    else{
        res.json("failed")
    }
    }
    catch(e){
        console.log("login error")
    }
})

app.listen(5000,()=>console.log("server is running"))