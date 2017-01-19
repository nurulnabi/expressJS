/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-19 15:15:13
* @Last Modified by:   noor
* @Last Modified time: 2017-01-19 17:34:24
*/

 var mongodb = require('mongodb');
 var mongoClient = require('mongodb').MongoClient;

 mongoClient.connect("mongodb://localhost:27017/contacts",function(err,db){
 	var coll = db.collection("contacts");
 	var mail = "noorul@creatiosoft.com";
 	var mob = "+1 (902) 449-5121";
 	coll.updateOne({$or:[{email:mail},{phone:mob}]},
 		{$set:{name:"noorul",email:mail,phone:mob}},
 		function(err,result){
 		console.log("obj",JSON.stringify(result),err);
 		db.close();
 	});
 	
 });	