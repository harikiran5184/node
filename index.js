const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    res.json({name:"hari"})
})

app.post('/login',(req,res)=>{
    res.json({name:"hari"})
})

app.listen(3000)
