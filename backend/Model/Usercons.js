const mongoose = require('mongoose');

const userconsSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
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
    quantity:{
        type: String,
        required: true,
        default: "1"
    },
    img:{
        type: String,
        default: "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

const userconsmodel = mongoose.model('usercons', userconsSchema);

module.exports = userconsmodel