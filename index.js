const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./models/User");
const app = express();

//---Routes---
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");

//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);

//---App Config
mongoose.connect("mongodb://cemdirman:15975300Cem@ds225703.mlab.com:25703/heroku_83mrzgsz");

//view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//---Server
const server = app.listen(process.env.PORT || 5000, () => {  
    console.log('The app is running on heroku');  
});
