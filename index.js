const express = require("express");

const port = 8000;



const db = require("./config/mongoose");
const schema = require("./models/Product");
const app = express();

// body parser
app.use(express.urlencoded());//it will read post request
app.use(express.json());


//use express router
app.use("/", require("./routes"));

app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})