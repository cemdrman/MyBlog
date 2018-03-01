const mongoose = require("mongoose");
const express = require("express");

const app = express();



//---Routes---
const indexRoutes = require("./routes/indexRoutes");






//Routes Using
app.use(indexRoutes);






//---App Config
//view engine
app.set("view engine","ejs");
app.use(express.static("public"));



//---Server

const server = app.listen(3000,() =>{
    console.log("App started");
});
