const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req,res){
    const firstName = req.body.firstName;
    console.log("First name:", firstName);
})

app.listen(3000,function(){
    console.log("server up gang 3k$")
})