const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const usermodel = mongoose.model('User',userschema);
module.exports = usermodel;