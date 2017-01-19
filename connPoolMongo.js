/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-19 11:40:29
* @Last Modified by:   noor
* @Last Modified time: 2017-01-19 14:17:15
*/

var express        =         require("express"),
	bodyParser     =         require("body-parser"),
	app            =         express(),

	MongoClient	   = 		 require('mongodb').MongoClient,
    assert 		   = 		 require('assert'),
    cJSON  		   =		 require('circular-json'),			//converting circular object to json
    arr 		   =		 require('../learning/arr');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());							//change bodyParser fn call to desired format

//******************************start a connection to mongodb and wait for connection******************//
var mongoPool;			//this is the global variable which will be used for pooling connections
var collection;			//this will hold the particular collection from the pool
var URL = "mongodb://localhost:27017/appMongo";
MongoClient.connect(URL,function(err,db){		//this will open a connection for forever or as long as server runs
	assert.equal(null,err);		//verify connection successful status

	mongoPool = db;				//this line will assign an opned connection waiting for request and enables us for pooling
	collection = db.collection('users');
	app.listen(3000,function(){
		console.log("server listening on port 3000");
	});
});

// console.log("--------------",mongoPool);

app.get('/',function(req,res){
	console.log("client requested");
	collection = mongoPool.collection('employee');
	// collection.find({"company":"google"},function(err,docs){
	// 	assert.equal(null,err);
	// 	docs.each(function(err,doc){
	// 		if(doc){
	// 			res.write(JSON.stringify(doc)+"\n")
	// 		}else
	// 			res.end();
	// 	});
		
	// });
	collection.find({"company":"google"}).toArray(function(err,result){		//for large data set dont use this
		result.forEach(r=>console.log(r));

	});
	res.end();
});

