const mongoose =  require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    userName = string,
    password = string
});

userSchema.plugin(passportLocalMongoose);

//UserSchema modelini disari export ediyoruz, adi ise User
module.exports = mongoose.model("User",userSchema);