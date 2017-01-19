/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-18 13:06:21
* @Last Modified by:   noor
* @Last Modified time: 2017-01-19 10:47:14
*/

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(bodyParser.urlencoded({ extended: false }));
// console.log(express);

app.post('/',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  // console.log("User name = "+user_name+", password is "+password);
  // console.log(res);
  // res.set({"content-Type":"Text/plain"});		//once you have setted the header (res.set()) or writeHead use
  // if(user_name == "noor" && password == "nabi"){ //just use write and at last use end otherwise error will be generated
  // 	res.write("Logged In");
  // }else
  // 	res.write("unsuccessful attemp");
  console.log(req.body);
  var arr = ['md','noorul','nabi','ansari'];
  res.json(arr);
  // res.end();
  
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})