const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhiaditya860:ZHXUrjX1q1Rg18RV@cluster0.xnayn8w.mongodb.net/");

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/signup', async (req, res)=>{
  const userName = req.body.username;
  const password = req.body.password;
  const mail = req.body.email;
  
  const existingUser = await User.findOne({email: mail});
  // CRUD --> Create, Read, Update and Delete
  if(existingUser) {
    return res.status(400).send("User already exists.");
  }
  
  const user = new User({
    name: userName, 
    email: mail, 
    password: password
  });
  user.save();      
  res.json({
    msg: "User created successfully"
  })
});
app.listen(3000)
