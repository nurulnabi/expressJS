/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-20 15:24:07
* @Last Modified by:   noor
* @Last Modified time: 2017-01-20 15:37:19
*/

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var mobileformat = /^\+?([1])\)?([ ]{1})?([(])?([0-9]{3})?([)])?([ ]{1})?([0-9]{3})[-. ]?([0-9]{4})$/;
var nameformat = /^\+?(([a-zA-Z]{4,10}[ ]{0,1}){1,4})$/;

exports.name = function(name) {
	return nameformat.test(name);
}

exports.email = function(email){
	return mailformat.test(email);
}

exports.phone = function(phone){
	return mobileformat.test(phone);
}

exports.all = function(name,email,phone) {
	return mailformat.test(email) && mobileformat.test(phone) && nameformat.test(name);
}