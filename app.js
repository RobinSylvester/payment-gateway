// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


















app.listen(3000,function(){
  console.log("Server started at port 3000");
});
