const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogTitle : { type: String, required: "Can not be empty"},
    blogImage : { type: String, required: "Can not be empty"},
    blog      : { type: String, required: "Can not be empty"},
    blogDate  : { type: Date,default: Date.now}
});

module.exports = mongoose.model("Blog",blogSchema);