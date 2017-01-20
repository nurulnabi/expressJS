/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-20 15:58:55
* @Last Modified by:   noor
* @Last Modified time: 2017-01-20 18:35:59
*/

var express 	= 	require("express"),
	app    		= 	express(),
	srvrConfig 	= 	require('./config/serverConfig'),
	dbConn 		= 	require('./dbConnection/connectTo'),
	routes    	= 	require("./routes/index")
	;

//first make db connection then start the server to listen
dbConn.makeConnection(function(){
	console.log("connection successful");
});
app.listen(3000);

//route the requests
// app.use(app.router);
// routes.initialize(app);

app.use("/",routes); // Set default route to route folder
module.exports = app;

