const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogTitle : { type: String, required: "Can not be empty"},
    blogImage : { type: String},
    blog      : { type: String},
    blogDate  : { type: Date,default: Date.now}
});

module.exports = mongoose.model("Blog",blogSchema);