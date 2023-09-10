const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())
app.use(express.json())
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://hari:hari@cluster0.1socvoq.mongodb.net/',{dbName:"project"}).then(()=>{console.log("Db connected")}).catch((err)=>{console.log("Error Occured")})

const Login = require('./models/login')
//const Signup=require('./models/signup')
app.post('/login',async (req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
    try{
    let data=await Login.find({phoneno:username,password:password})
    if(data.length>0){
        let enc=JSON.stringify(data)
        console.log(data)
        res.json({token:enc,name:data[0].userName})
    }
    else{
        res.json("failed")
    }
    }
    catch(e){
        console.log("login error")
    }
})
app.post('/signup',async (req,res)=>{
    const {username,name,password}=req.body
    try{
        let check=await Login.find({phoneno:username})
        if(check.length>0){
            res.json("The Phone Number is Already Exists")
        }
        else{
        let data=new Login({userName:name,phoneno:username,password:password})
        await data.save();
        res.json("Sign Up Successfull")
        }
    }
    catch(e){
        console.log("signup error",e)
    }
})

app.listen(5000,()=>console.log("server is running"))
