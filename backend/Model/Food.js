const mongoose = require('mongoose');

const foodschema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },
    calories:{
        type: Number,
        required: true
    },
    fat:{
        type: Number,
        required: true
    },
    protien:{
        type: Number,
        required: true
    },
    carbs:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        default: "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"
    },
    category:{
        type: String,
        required: true
    }
})

const foodmodel = mongoose.model('food',foodschema);

module.exports = foodmodel;