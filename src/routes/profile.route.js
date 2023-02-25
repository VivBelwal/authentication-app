const express = require("express");
const Register = require("../models/regitster.model");
const Profile = require("../models/profile.model");
const app = express.Router();
app.use(express.json());


app.get("/", async (req, res) => {
    let { token } = req.body;

  
    try {
      
      let profile = await Profile.findOne({ email : token.email });

      
        return res
          .status(200)
          .send({ status: "ok", data : profile });
  
  
     
    } catch (e) {
      return res.status(404).send("Bad Request");
    }
  });

app.patch("/", async (req, res) => {
  let { email, password, picture, name, bio, phone } = req.body;

  try {
    await Register.updateOne({ email },{$set : {email, password , picture, name, bio, phone}} );
    return res
    .status(200)
    .send({ status: "ok", message: "udated" });
  } catch (e) {
    return res.status(404).send("Bad Request");
  }
});
module.exports = app
