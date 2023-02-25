const {Schema, model} = require("mongoose");

const ProfileSchema = new Schema({
    email : {type : String,},
    password : {type : String,},
    picture : {type : String,},
    name : {type : String,},
    bio : {type : String},
    phone : {type : String,}

})

const Profile = model("profile", ProfileSchema);

module.exports = Profile