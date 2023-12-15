const express = require('express');
const app = express()

const users = [{
    name: "Abhiraj",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())

app.get('/', (req, res)=>{
    const kidneysTot = users[0].kidneys;
    const totKidneys = kidneysTot.length
    const totHealthy = kidneysTot.filter((val)=>{return (val.healthy == true)})
    const totHealthyCnt = totHealthy.length
    const unHealthyCnt = totKidneys - totHealthyCnt

    res.json({
        totKidneys,
        totHealthyCnt,
        unHealthyCnt
    })
})

app.post('/', (req, res)=>{
    const isHealthy = req.body.healthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res)=>{
    const cnt = users[0].kidneys.length
    const cnt2 = users[0].kidneys.filter((val)=>{return val.healthy == true})
    if(cnt == cnt2.length) {
        res.status(411).json({
            msg: "You have all healthy kidneys!"
        })
    }

    users[0].kidneys.forEach((val)=>{val.healthy = true})
    res.json({
        msg: "Done!"
    })
})

app.delete('/', (req, res)=>{
    // You should return 411
    const cnt = users[0].kidneys.length
    users[0].kidneys = users[0].kidneys.filter((val)=>{return val.healthy == true})
    if(cnt == users[0].kidneys.length) {
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    } else {
        res.json({
            msg: "Done!"
        })
    }
})

app.listen(3000)


// const  express = require("express")
// const app = express()
// app.get("/file/:fileName", (req, res)=>{
//     const name = req.params.fileName
//     console.log(name)
//     res.json({})
// })

















