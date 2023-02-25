const {Schema, model} = require("mongoose");

const RegisterSchema = new Schema({
    email : {type : String, required: true, unique: true},
    password : {type : String, required: true,},
})

const Register = model("register", RegisterSchema);

module.exports = Register