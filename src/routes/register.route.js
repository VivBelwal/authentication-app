const express = require("express");
const Register = require("../models/regitster.model");
const Profile = require("../models/profile.model");
const app = express.Router();
app.use(express.json());

app.post("/", async (req, res) => {
  let { email, password,name } = req.body;

  try {
    let user = await Register.findOne({ email });
    if (user) {
      return res
        .status(400)
        .send({ status: "failed", message: "User already registered" });
    }

    await Register.create({ email, password });
    await Profile.create({email, password, name , picture : "", bio : "", phone : ""  })
    return res
      .status(201)
      .send({ status: "ok", message: "User  registered successfully" });
  } catch (e) {
    return res.status(404).send("Bad Request");
  }
});
module.exports = app
