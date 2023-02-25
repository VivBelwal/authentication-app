const express = require("express");
const Register = require("../models/regitster.model");
const jwt = require("jsonwebtoken");

const app = express.Router();
app.use(express.json());

app.post("/", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await Register.findOne({ email });
    if (user) {
        if(user.password === password){
            const token = jwt.sign(
                {id : user.id, email : user.email}, "user@123", {expiresIn : "2days"})

            return res
            .status(201)
            .send({ status: "ok", message: "User Login Successfully" , token});
        }

        return res
        .status(400)
        .send({ status: "failed", message: "Password incorrect" });
     
    }

    
    return res
      .status(400)
      .send({ status: "failed", message: "User does not exist" });
  } catch (e) {
    return res.status(404).send("Bad Request");
  }
});
module.exports = app