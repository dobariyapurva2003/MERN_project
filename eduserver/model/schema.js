const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname : {
        type: String,
        required : true
    },
    lname : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    phone : {
        type: Number,
        required : true
    },
    course : {
        type: String,
        required : true
    },
    gender : {
        type: String,
        required : true
    },    
})

const User = new mongoose.model('User', userSchema);

module.exports = User;

