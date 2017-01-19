/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-19 10:02:33
* @Last Modified by:   noor
* @Last Modified time: 2017-01-19 10:23:08
*/

var mongoClient	=	require('mongodb').MongoClient
	, assert 	=	require('assert');

var url = 'mongodb://localhost:27017/appMongo';
var servr = {
		server:{
			poolSize:1		//this is the number of connections in connection pool with each db instance
		}
	};

mongoClient.connect(url,servr,function(err,db){
	assert.equal(null,err);				//checks connection is successful or not

	console.log("connection number: 1");
});

mongoClient.connect(url,function(err,db){
	assert.equal(null,err);				//checks connection is successful or not

	console.log("connection number: 2");
});

