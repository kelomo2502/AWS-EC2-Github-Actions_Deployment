const express = require("express")
const services = express()

services.get("/services", (req,res)=>{
   res.status(200).json({message:"Here are all our services"}) 
});

module.exports = services;