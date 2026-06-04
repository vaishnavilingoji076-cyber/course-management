const mongoose = require("mongoose");

const courseSchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
      },

      description:{
        type:String,
        required:true,
      },

      fees:{
        type:Number,
        required:true,

      },
      duration:{
        type:String,
        required:true,
      },
      status:{
        type:String,
        required:true,
      },
      eligibility:{
        type:String,
        required:true,
      },
      status:{
        type:Boolean,
        default:true,
      },

    },
    { timestamps:true }
);

module.exports=mongoose.model("Course",courseSchema);