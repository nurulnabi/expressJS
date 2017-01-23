
var 	express 		= 	require('express'),
		app 			= 	express(),
		router 			=	express.Router(),
		msg 			= 	require('../config/messages.json'),
		validate 		=	require('../utils/validation'),
		dbQuery 		= 	require('../dbConnection/dbQuery'),
		analyseResult	= 	require('../utils/analyseResult')
		;		


router.get('/',function(req,res){
	res.end("use post method to use contact method");
});


router.post('/',function defaultRoute(req,res){
	console.log("client requested");
	res.end(msg.welcome);
});


router.post('/create',function createRoute(req,res){
	console.log("client requested create");
	var 	name 	=	req.body.name,
			email 	= 	req.body.email,
			phone 	= 	req.body.phone;
			data 	= {
				"name": name,	"email": email, 	"phone": phone
			};
	if(!validate.all(name,email,phone)){
		res.send(msg.invalidData);
	}else{
		dbQuery.createContact(data,data,
		function(err,result){
			var check = result.result;
			if(err){
					res.send(msg.createFail);
			}else{
				analyseResult.ofCreateContact(result,res);
			}
		});
	}
});


router.post('/search',function searchRoute(req,res){
	console.log("client requested search");
	var email = req.body.email,
		filter = {"email": email};
	if(!validate.email(email)){
		res.end(msg.invalidEmail+email);	
	}else {
		dbQuery.searchContact(filter,function(err,doc){
			if(!doc){
					res.send(msg.searchFail);
			}else{
				var result = "Name: "+doc.name+"<br>email: "+doc.email+"<br>mobile: "+doc.phone;
				res.end(result);
			}
		});
	}
});


router.post('/update',function updateRoute(req,res){
	console.log("client requested update");
	var name 	= 	req.body.name,
		email 	= 	req.body.email,
		phone 	= 	req.body.phone
		;
	if(!validate.all(name,email,phone)){
		res.send(msg.invalidData);
	}else{
		var mail = req.body.email;
		var field = req.body.update;
		if(!field){
			res.send(msg.updateFieldNull);
			return;
		}
		var update = {};
		field.forEach(function(elem){
			update[elem] = req.body[elem];
		});
		dbQuery.updateContact({email:mail},update,function(err,result){
			var check = result.result;
			if(err){
				res.send(msg.updateFail+err);
			}else {
				analyseResult.ofUdateContact(result,res);
			}
		});
	}
});


router.post('/delete',function deleteRoute(req,res){
	console.log("client requested delete");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!mailformat.test(req.body.email)){
		res.send(msg.invalidEmail+req.body.email);
	}else {
		dbQuery.deleteContact({email:req.body.email},function(err,result){
			if(err){
					res.send(msg.deleteFail+err);
			}else {
				analyseResult.ofDeleteContact(result,res);
			}
		});
	}
});

module.exports = router;