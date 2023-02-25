const express = require("express");

const Profile = require("../models/profile.model");
const app = express.Router();
app.use(express.json());
const jwt = require("jsonwebtoken");

app.get("/:token", async (req, res) => {
    let { token } = req.params;

  
    try {
      const data= jwt.decode(token)
   
      let profile = await Profile.findOne({ email : data.email});

      
        return res
          .status(200)
          .send({ status: "ok", data : profile });
  
  
     
    } catch (e) {
      return res.status(404).send("Bad Request");
    }
  });

app.patch("/", async (req, res) => {
  let { email, password, picture, name, bio, phone } = req.body;
console.log(req.body)
  try {
    await Profile.updateOne({ email },{$set : {email, password , picture, name, bio, phone}} );
    return res
    .status(200)
    .send({ status: "ok", message: "udated" });
  } catch (e) {
    return res.status(404).send("Bad Request");
  }
});
module.exports = app
