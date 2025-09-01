const express=require("express");
const { connectToMongo } = require("./connect");

const app=express();
const PORT=80;
//connection
connectToMongo("mongodb://127.0.0.1:27017/contact-form");
//middlewares
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`server started ${PORT}` );
})