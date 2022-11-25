const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/calcount";

const connecttomongodb = ()=>{
    mongoose.connect(url,()=>{
        console.log("Connection successfully done!")
    })
}

module.exports = connecttomongodb;