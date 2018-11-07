const express = require("express");
const axios = require("axios");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,"../src/index.html"));
});

app.get("/getFilm/:filmid", (req,res)=>{
  axios.get("http://www.omdbapi.com/?i=tt"+req.param("filmid")+"&apikey=bff30839").then(response => res.send(response.data));
});

app.get("/getFilmByTitle/:filmtitle", (req,res)=>{
  axios.get("http://www.omdbapi.com/?t="+req.param("filmtitle")+"&apikey=bff30839").then(response => res.send(response.data));
});


app.listen(port, (err) => {
 if(err){
 console.log(err);
 } else{
 open("http://localhost:" + port);
 }
});

// function getFilm(){
//   axios.get('http://www.omdbapi.com/?i=tt3896190&apikey=bff30839')
//   .then(function (response) {
//     document.getElementById("film tag").innerHTML=response;
//   })
//   .catch(function (error) {
//  console.log(error);
//  });
// }
