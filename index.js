const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");
const user = require("./models/User");
//const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

//---Routes---
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");


//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);



//---App Config
mongoose.connect("mongodb://localhost/MyBlogApp");

//view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

/*app.use(require('express-session')({
    secret :"secret-keyword",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize);
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
*/

//---Server
var port = process.env.PORT || 8080;
const server = app.listen(port, () => {  
    console.log('Our app is running on http://localhost:' + port);  
});
