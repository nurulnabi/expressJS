/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-20 12:25:49
* @Last Modified by:   noor
* @Last Modified time: 2017-01-20 12:44:57
*/
/*
*	IMPORTANT: This connection servers request on the basis of request connection pool
*/

var 	emitter		=	require('events'),
		eventEmtr 	=	new emitter(),
		mClient 	=	require('mongodb').MongoClient,
		assert      =   require('assert'),
		db,					//will hold the mongodb connection object
		collection;			//will hold the mongodb particular collection


var makeConnection = function(URL,handleConn,appCallback){
	mClient.connect(URL,handleConn);
}

var handleConn = function(err,db){
	if(!err){
		console.log("connected");
	}
	dbConnClose(db);
}

var dbConnClose = function(db){
	db.close();
	console.log("connection closed");
}

makeConnection("mongodb://localhost:27017/contacts",handleConn);