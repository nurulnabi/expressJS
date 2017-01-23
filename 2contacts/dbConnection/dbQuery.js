/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-23 11:50:05
* @Last Modified by:   noor
* @Last Modified time: 2017-01-23 13:08:50
*/

var MongoClient	 = 	require('mongodb').MongoClient, 
	dbQuery 	 = 	{},
	dbRefrence 	 =  require('./connectTo')
	;

dbQuery.searchContact = function(filter,callback){
	dbRefrence.db.collection('contacts').findOne(filter,function(err,doc){
		callback(err,doc);
	});
};

dbQuery.createContact = function(filter,data,callback){
	dbRefrence.db.collection('contacts').updateOne(filter,{ $set:data },
		{
			upsert:true
		}
		,function(err,result){
			callback(err,result);
		});
};

dbQuery.updateContact = function(filter,data,callback){
	dbRefrence.db.collection('contacts').updateOne(filter,{$set:data},function(err,result){
			callback(err,result);
		});
};

dbQuery.deleteContact = function(filter,callback){
	dbRefrence.db.collection('contacts').deleteOne(filter,function(err,result){
		callback(err,result);
	});
};

module.exports = dbQuery;
