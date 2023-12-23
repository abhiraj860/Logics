const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require('zod');


const userNameSchema = z.string().email();
const passWordSchema = z.string().min(6);

function decodeJwt(token) {
    // Your code here
    try {
        let decoded = jwt.decode(token, {complete: true}).header.typ;
        if(decoded === "JWT") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
const token = jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, "randomPassword");
const decoded = decodeJwt("ken");
console.log(decoded)