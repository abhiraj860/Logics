const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://abhiaditya860:ZHXUrjX1q1Rg18RV@cluster0.xnayn8w.mongodb.net/");

const schema = {
    username: String,
    mail: String,
    password: String
}

const User = mongoose.model('User', schema);

app.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    
    const existingUser = await User.findOne({username, mail});
    if(existingUser) {
        return res.status(400).send('User already exists');
    }
    const user = new User({
        username,
        mail,
        password
    });
    user.save();
    res.status(200).json({
        msg: "User created successfully"
    });
});

app.listen(3000);