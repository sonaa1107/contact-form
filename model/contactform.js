const mongoose=require("mongoose");
const contactFormSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
},{timestamps:true})

const Form=mongoose.model("formmodel",contactFormSchema);