const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

app.get('/interest', (req, res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    if(isNaN(principal) || isNaN(rate) || isNaN(time)) {
        throw new error("Not a number");
    }
    const interest = (principal * rate * time) / 100;
    const finalAmount = principal + interest;
    res.status(200).json({
        interest,
        finalAmount
    });
})

app.use((err, req, res, next)=>{
    res.status(404).json({msg: "Error in Input found!"});
});

app.listen(3000);