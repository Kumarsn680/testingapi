require('dotenv').config()
const express = require('express')
const router = require('./book')
const app = express()
require('./db')
app.use('/book',router)



app.get('/',(req,res)=>{
    res.json({
        message : "hi"
    })
})

app.listen(8000,()=>{
    console.log('Server listening on 8000')
})
