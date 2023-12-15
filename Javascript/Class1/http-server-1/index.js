const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/',(req, res) =>{
    console.log(req.query.message)
})

app.get('/',(req, res) =>{
    res.send("hello world how are you")
})
app.listen(port)