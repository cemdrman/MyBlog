const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogTitle : { type: String, required: "Title can not be empty"},
    blogImage : { type: String, required: "Image can not be empty"},
    blog      : { type: String, required: "Blog message can not be empty"},
    blogDate  : { type: Date, default: Date.now}
});
module.exports = mongoose.model("Blog",blogSchema);