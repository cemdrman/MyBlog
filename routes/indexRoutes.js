const express = require("express");
const router = express.Router();
const Blog = require('../models/Blog');

router.get("/", (req, res) => {    
    Blog.find({}, function(err, Blogs){        
        if (err) { console.log(err); return res.status(500).send("There was a problem finding the blogs."); }       
        res.render('home', {postDataList: Blogs});
    }).limit(3);        
});

router.get("/about", (req, res) => {
    res.render('aboute');
});

router.get("/resume",(req,res)=>{
    res.render('resume');
});

router.get("/contact", (req, res) => {
    res.render('contact');
});

router.get("/blogs", (req, res) => {
    Blog.find({}, function(err, Blogs){        
        if (err) { console.log(err); return res.status(500).send("There was a problem finding the blogs."); }       
        res.render('blogs', {postDataList: Blogs});
    });    
});

router.get("/blogs/:blogId", (req, res) => {   
    Blog.findById(req.params.blogId)
    .then((blog) => {  
        res.render('blog/showBlog', {blog: blog});
    }).catch((err) => {
        if (err) { console.log(err); return res.status(500).send("There was a problem finding the blogs."); }    
    });
});
module.exports = router;