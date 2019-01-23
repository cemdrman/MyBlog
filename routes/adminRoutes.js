const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const Blog = require('../models/Blog');

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/admin/singin", (req, res) => {
    res.render('./admin/singin');
});

router.post("/admin_singin", (req, res) => {       
    let email = req.body.email;
    let password = req.body.password;
    const query = { "email":email, "password": password };
    console.log(email + " " + password);

    User.findOne( query, (err,user)=> {
        console.log('user:' + user);
        if (err || !user){            
            res.redirect('./admin/singin');
        }
        else {            
            res.render('./admin/admin_dashboard');
            console.log('başarılı giriş!');
        } 
    });
    
});

router.get("/dashboard", (req,res) => {
    Blog.findById(req.params.blogId)
    .then((blog) => {  
        res.render('admin/dashboard', {blog: blog});
    }).catch((err) => {
        if (err) { console.log(err); return res.status(500).send("There was a problem finding the blogs."); }    
    });
})

router.post("/admin/addblog", (req, res) => {
    let baslik = req.body.baslik;
    let resimUrl = req.body.resimUrl;
    let icerik = req.body.editor;
    console.log('--------------------------------------');
    console.log('blog: ' + baslik + ", " + resimUrl + ", " + icerik);

    Blog.create({
            blogTitle : baslik, 
            blogImage : resimUrl, 
            blog : icerik
        }, (err, Blog) =>{
        if(err){
            console.log("Blog kaydedilemedi!");
            console.log(err)
            return res.status(500).send("There was a problem adding the information to the database.");
        }else{
            res.render('./admin/admin_dashboard');
            console.log("Blog kaydedildi!");
        }
    });
});
module.exports = router;