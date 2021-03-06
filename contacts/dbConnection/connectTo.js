/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-20 12:25:49
* @Last Modified by:   noor
* @Last Modified time: 2017-01-23 11:00:20
*/
/*
*	IMPORTANT: This connection servers request on the basis of request connection pool
*			   Thus once the connection is established it will be opened until the server runs
*/

var emitter		=	require('events'),
	eventEmtr 	=	new emitter(),		//learning to use event emitter
	mClient 	=	require('mongodb').MongoClient,
	srvrConfig 	= 	require('../config/serverConfig'),
	app    		= 	require("express")(),
	assert      =   require('assert'),
	dbConfig	=	require('../config/dbConfig.json'),
	objectDb,		//will hold the mongodb connection object
	collDb,			//will hold the mongodb particular collection
	nameColl,		//will hold the collection which is supposed to be operated
	msgg = "noor"
	;

var URL = "mongodb://"+dbConfig.dbHost+":"+dbConfig.dbPort+"/"+dbConfig.dbName;
nameColl = dbConfig.dbCollName;

var makeConnection = function(startServer){
	eventEmtr.on('handleConn',startServer);		//registering the startServer to callback
	mClient.connect(URL,handleConn);	
}

function handleConn(err,db){
	assert.equal(null,err);				//stops the program if database connection fails priting the error
	exports.objectDb = objectDb = db;
	exports.collDb   = collDb   = objectDb.collection(nameColl);
	eventEmtr.emit('handleConn',collDb);		//start the server once connection to database is successful
}

exports.makeConnection = makeConnection;
