const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({

    homeImage    : {type:String, required:"Can not be empty"},
    aboutImage   : {type:String, required:"Can not be empty"},
    aboutContext : {type:String, required:"Can not be empty"},
});


module.exports = mongoose.model("Site", siteSchema);