const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log(res.body.kidneys.length);
    res.json({
        msg: "done"
    })
}); 

app.use((err, req, res, next)=>{
    res.send({
        msg: "Internal error"
    })
})

app.listen(3000)

// const express = require('express');
// const zod = require('zod');
// const app = express();
// const schema = zod.array(zod.number());

//
// {
//     email: string=>mail
//     password:  atleast 8 letters
//     country: "IN", "US"
// }

// const schema1 = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US"))
// })

// app.use(express.json());


// app.post("/health-checkup", (req, res)=>{
//     const kidneys = req.body.kidneys
//     const response = schema.safeParse(kidneys)
//     if(!response.success) {
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     } else {
//         res.send({response})
//     }
// })

// global catches
// app.use((err, req, res, next)=>{
//     res.json({
//         msg: "Something is up with our server"
//     })
// })







// let cnt = 0;
// function cnter(req, res, next) {
//     cnt++;
//     console.log(cnt)
//     next();
// }

// app.use(cnter)

// app.get("/health-checkup", (req, res)=>{
//     const userName = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = parseInt(req.query.kidneyId)

//     if(userName === "admin" && password ==="pass") {
//         if(kidneyId === 1 || kidneyId === 2) {
//             res.json({
//                 msg: "Your kidney is fine!"
//             })

//         } 
//     } else {
//         res.status(400).json({msg: "Somethings up with your input"})
//     }
// })

// app.listen(3000)