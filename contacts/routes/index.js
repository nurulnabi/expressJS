
var 	express 	= 	require('express'),
		app 		= 	express(),
		router 		=	express.Router,
		bodyParser	=	require('body-parser'),
		msg 		= 	require('../config/messages.json'),
		validate 	=	require('../utils/validation');
		

console.log(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());							//change bodyParser fn call to desired format

// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next();
// });


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
	if(!validate.all(name,email,phone)){
		res.send(msg.invalidData);
	}else{
		collection.updateOne({
			"name":req.body.name,
			"email":req.body.email,
			"phone":req.body.phone
		},{
			$set:{
			"name":req.body.name,
			"email":req.body.email,
			"phone":req.body.phone
		}
		},
		{
			upsert:true
		}
		,function(err,result){
			var check = result.result;
			if(err){
					res.send(msg.createFail+err);
			}else if(check.ok==1 && check.nModified ==0 && check.upserted == null){
				res.send(msg.createExist);
			}else if(check.ok==1 && check.nModified ==0 && check.upserted != null){
				res.send(msg.createSuccess);
			}
		});
	}
});


router.post('/search',function searchRoute(req,res){
	console.log("client requested search");
	var email = req.body.email;
	if(!validate.email(email)){
		res.end(msg.invalidEmail+email);	
	}else {
		collection.findOne({'email':email},{_id:0},function(err,doc){
			if(!doc){
					res.send(msg.searchFail+err);
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
		phone 	= 	req.body.phone;
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
		collection.updateOne({email:mail},
 			{$set:update},
			function(err,result){
				var check = result.result;
				if(err){
					res.send(msg.updateFail+err);
				}else if(check.nModified == 0 && check.n == 1){
					res.send(msg.updateDuplicate+result);
				}else if(check.nModified == 0 && check.n == 0){
					res.send(msg.updateFail+result);
				}else {
					res.send(updateSuccess);
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
		collection.deleteOne({email:req.body.email},function(err,result){
			if(err){
					res.send(msg.deleteFail+err);
			}else if(result.result.n == 0){
				res.send(msg.deleteFail);
			}else {
				res.send(msg.deleteSuccess);
			}
		});
	}
});

exports.router = router;