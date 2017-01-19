/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-18 18:59:40
* @Last Modified by:   noor
* @Last Modified time: 2017-01-18 19:19:33
*/

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

var MongoClient	   = 		 require('mongodb').MongoClient
  , assert 		   = 		 require('assert');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.get('/',function(req,res){
 
 var url = 'mongodb://localhost:27017/appMongo';
 // Use connect method to connect to the Server
 MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server");
   // res.write("connected to the appMongo database!");
   res.end("connected to the appMongo database!");

   db.close();
 });
  // res.end("connected to the appMongo database!");
});


app.listen(3000,function(){
  console.log("Started on PORT 3000");
})