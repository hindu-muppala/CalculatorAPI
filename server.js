'use strict'
const express =require('express')
const app=express()
const path=require('path')
app.use('/static',express.static(path.join(__dirname,'public')))
const calculate=require('./calculator.js')

app.get('/',(req,res)=>{
    res.send(calculate(req.query.exp)+'')
})

app.listen(3000);