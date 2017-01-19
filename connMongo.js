/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-19 10:27:00
* @Last Modified by:   noor
* @Last Modified time: 2017-01-19 11:31:33
*/


var express        =         require("express"),
	bodyParser     =         require("body-parser"),
	app            =         express(),

	MongoClient	   = 		 require('mongodb').MongoClient,
    assert 		   = 		 require('assert'),
    arr 		   =		 require('../learning/arr');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());							//change bodyParser fn call to desired format


app.post('/',function(req,res){
	var URL = req.body.url;
	
	MongoClient.connect(URL,function(err,db){
		assert.equal(null,err);				//checks connection is successful or not

		db.listCollections({}).toArray(function(err,collections){		//list the collections
			assert.equal(null,err);
			collections.forEach(function(coll){
				console.log(coll);
			});
		});
		
		db.close();
	});
	res.send("Collections listed: check the console");
});

app.get('/',function(req,res){
	var URL = "mongodb://localhost:27017/appMongo";
	MongoClient.connect(URL,function(err,db){
		assert.equal(null,err);				//checks connection is successful or not
		
		db.listCollections({}).toArray(function(err,collections){		//list the collections
			assert.equal(null,err);
			collections.forEach(function(coll){
				console.log(coll);
			});
		});
		
		db.close();
	});
	res.send("Collections listed: check the console");
});




app.listen(3000,function(err){
	assert.equal(null,err);				//checks server status is successful or not

	console.log("server running on port 3000");
});


