const express = require('express');
require("dotenv").config()
const cors = require('cors');
const app = express();
const connect = require("./src/config/db")
const PORT = process.env.PORT||8080;

const register = require("./src/routes/register.route")
const login = require("./src/routes/login.route")
const profile = require("./src/routes/profile.route")
app.use(express.json());
app.use(cors())
app.use("/register", register)
app.use("/login", login)
app.use("/profile", profile)

app.listen(PORT, async () =>{
    try{
        await connect();
console.log("LIstening....")
    }
    catch(e){console.log(e)}
})
