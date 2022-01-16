const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    pictures :[{type:String,required:true}],
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
},{
    versionKey:false,
    required:true,
});

module.exports = mongoose.model("gallery",gallerySchema)