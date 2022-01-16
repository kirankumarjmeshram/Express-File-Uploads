const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const Gallery = require("../models/gallery.model");

router.post("",async (req,res)=>{
    const gallery = await Gallery.create(req.body);
    return res.status(201).send(gallery)
})

router.get("",async (req,res)=>{
    const gallery = await Gallery.find().lean().exec();
    return res.status(201).send(gallery)
})


router.delete("/:id",async (req,res)=>{
    const gallery = await Gallery.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(gallery)
})


module.exports = router;