const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/schema");

router.get('/', (req, res) => {
    res.send("hello hiya router");
});

router.post('/contact', async (req, res) => {

    const { fname, lname, email, phone, course, gender } = req.body;

    if (!fname || !lname || !email || !phone || !course || !gender) {
        return res.status(422).json({ error: "please fill the field properly" });
    }
    try{
         const userexist = await User.findOne({ email: email })
         if (userexist) {
            return res.status(422).json({ error: "Email is already exist" });
        }
        const user = new User({ fname, lname, email, phone, course, gender });
        await user.save();
           res.status(201).json({ message: "data stored successfully" });
        
    // console.log(req.body);
    // res.send(req.body);
    }catch(err){
        console.log(err);
    }
    
});

module.exports = router;