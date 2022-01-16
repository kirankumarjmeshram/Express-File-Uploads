const express = require("express");

const app = require("./index")

const connect = require("./configs/db");

app.listen(1234,async (req,res)=>{
   await connect();
    console.log("Listening on port 1234")
})