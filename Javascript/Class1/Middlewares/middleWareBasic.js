const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next) {
    if(req.query.age >= 14) {
        next();
    } else {
        res.json({
            msg: "You are not of the required age."
        });
    }    
}

app.use(isOldEnoughMiddleware);
app.use(express.json());

app.get('/ride1', (req, res)=>{
    res.json({
        msg: "You have successfully taken ride 1."
    });
});

app.get('/ride2', (req, res)=>{
    res.json({
        msg: "You have successfully taken ride 2."
    });
});

app.listen(3000);