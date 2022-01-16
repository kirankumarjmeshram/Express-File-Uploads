const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const User = require("../models/user.model");

router.post("",async (req,res)=>{
    const user = await User.create(req.body);
    return res.status(201).send(user)
})

router.get("",async (req,res)=>{
    const users = await User.find().lean().exec();
    return res.status(201).send(users)
})

router.patch("",async (req,res)=>{
})

router.delete("/:id",async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(user)
})


module.exports = router;