const mongoose =  require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    userEmail : String,
    userPassword : String
});

userSchema.plugin(passportLocalMongoose);

//UserSchema modelini disari export ediyoruz, adi ise User
module.exports = mongoose.model("User",userSchema);