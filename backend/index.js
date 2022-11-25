const connecttomongodb = require("./db");
const express = require("express");
var cors = require('cors')
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.use('/auth', require('./Routes/auth'));
app.use('/food', require('./Routes/food'));
app.use('/usercons', require('./Routes/usercons'));

app.listen(port,()=>{
    console.log(`calcount is listening at http://localhost:${port}`);
})

connecttomongodb();