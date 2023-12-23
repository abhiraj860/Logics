const jwt = require('jsonwebtoken');

// Generate, decode, verify

const value = {
    name: "Abhiraj",
    accountNo: 123123
};

// JWT 
// This token has been signed using this secret, hence this token can only be verified using this secret.
const token = jwt.sign(value, "secret");
console.log(token); 

// Below is my checkbook
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXJhaiIsImFjY291bnRObyI6MTIzMTIzLCJpYXQiOjE3MDMzMzIzMDh9.DGzBGbP3piWV89GyDl_zUlX-7_nJE30XYzE4nWbKpho

 

