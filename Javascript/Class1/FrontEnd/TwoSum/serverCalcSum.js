const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/sum', (req, res)=>{
    const num1 = parseInt(req.query.a);
    const num2 = parseInt(req.query.b);
    const sum = num1 + num2;
    console.log(sum);
    res.status(200).send(sum.toString());
});

app.use((err, req, res, next)=>{
    res.status(404).json({msg: "error"});
});

app.listen(3000);