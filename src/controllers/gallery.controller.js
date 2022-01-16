const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const Gallery = require("../models/gallery.model");

const {uploadSingle,uploadMultiple} = require("../middlewares/upload");

const fs = require("fs");


router.get('',async (req, res) => {
    try {
        const gallery = await Gallery.find().lean().exec();
        res.status(201).send(gallery);
    } catch (err) {
        res.send(500).json({message: err.message,status:"Failed"});
    }
})


router.post("/single", uploadSingle("profile_pic"), async (req,res)=>{
    try{
        const gallery = await Gallery.create({
            pictures:req.file.path,
            user_id:rec.body.user_id
        });
        return res.status(200).send(gallery)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
   
})


router.post("/multiple",uploadMultiple("pictures",5),async (req, res) => {
    try {
        const filePaths = req.files.map((file) => file.path);
    
        const gallery = await Gallery.create({
          pictures: filePaths,
          user_id:rec.body.user_id,

        });
    
        return res.send({gallery });
      } catch (err) {
        return res.status(500).send(err);
      }
})

router.delete("/:id",async (req, res) => {
    try {
        const gallery=await Gallery.findByIdAndDelete(req.params.id).lean().exec();
        res.send(gallery);
        for(let i=0; i<gallery.pictures.length; i++) {
            fs.unlinkSync(gallery.pictures[i]);
        }
    } catch (err) {
        res.send(500).json({message: err.message,status:"Failed"});
    }
})
module.exports =router;