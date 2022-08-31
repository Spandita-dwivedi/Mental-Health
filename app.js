//jshint esversion: 6


const express=require("express");
const request=require("request");
const bodyParser=require("body-parser");
const ejs = require("ejs");
const path = require('path');
const _ = require('lodash');



const app=express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static('public'));


app.get("/" ,function(req,res){
    res.render('homePage');
});

app.get("/about" ,function(req,res){
    res.render('about');
});



app.get("/blogs" ,function(req,res){
    res.render('blogs');
});

app.get("/hope" ,function(req,res){
    res.render('hope');
});


app.get("/mental" ,function(req,res){
  res.render('mental');
});



app.get("/posts/:postName", function (req, res) {
    const requestedTitle = _.lowerCase(req.params.postName);
  
    posts.forEach(function (post) {
      const storedTitle = _.lowerCase(post.title);
      if (storedTitle == requestedTitle) {
        res.render("post", {
          title: post.title,
          content: post.content,
        });
      }
    });
  });
  

app.listen(3000, function(){

console.log("Server is running on port 3000");
});
