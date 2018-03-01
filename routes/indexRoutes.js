const express = require("express");

const router = express.Router();


let postDataList = [
        {
            postTitle:"Blog Denemesi 1",
            postSubtitle:"Test",
            postImage:"https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5edd950e986d5ed7b84a908bf6df269f&auto=format&fit=crop&w=1951&q=80"
        },
        {
            postTitle:"Blog Denemesi 2",
            postSubtitle:"Test2",
            postImage:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59f17a21ae8a708059646146af380320&auto=format&fit=crop&w=1950&q=80"
        },
        {
            postTitle:"Blog Denemesi 3",
            postSubtitle:"Test3",
            postImage:"https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixlib=rb-0.3.5&s=fa35e008ee5b6d0054ece52f5316b4e8&auto=format&fit=crop&w=2100&q=80"           
        }
    ]

router.get("/",(req,res)=>{
    res.render('home',{
                    postDataList: postDataList
                    }
                );
});

router.get("/about",(req,res)=>{
    res.render('aboute');
});

router.get("/contact",(req,res) => {
    res.render("contact");
});
module.exports = router;