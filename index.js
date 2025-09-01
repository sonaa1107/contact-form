const express=require("express")
const app=express();
const PORT=80;
const mongoose=require("mongoose");



app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`server started ${PORT}` );
})