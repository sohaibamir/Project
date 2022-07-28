// const connectToSql = require("./db");
const express = require("express");
const cors = require("cors");
const app = express()
const port=9000;

//for declaring that the resultant output will be json
app.use(express.json());
app.use(cors())

//Available Routes

app.use("/api/auth", require('./routes/auth.js'));
app.listen(port, ()=>{
    console.log(`server is running on port localhost:${port}`)
})
// connectToSql();