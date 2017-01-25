/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-18 13:06:21
* @Last Modified by:   noor
* @Last Modified time: 2017-01-25 12:26:38
*/

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',express.static('public'));

// app.get("/data",function(req,res){
//   res.sendFile('arr.js', { root: __dirname });
// });


app.listen(3000,function(){
  console.log("Started on PORT 3000");
})