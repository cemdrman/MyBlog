const express = require("express");

const router = express.Router();

router.get("/admin/singin", (req, res) => {
    res.render('./admin/singin');
});


router.post("/singin",(req,res) =>{
   let email = req.body.email;
   let password = req.body.password;
   console.log(email + " " + password); 
});
module.exports = router;