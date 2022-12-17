const express = require('express')
const app = express()
app.use('/',(req,res)=>{
    res.json({
        message : "hi"
    })
})
app.listen(9000,()=>{
    console.log(`Server started on 9000`)
})