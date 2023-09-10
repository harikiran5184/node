const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    res.json("hello")
})

app.listen(3000)