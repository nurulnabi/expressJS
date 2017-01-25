var myApp = angular.module('httpReq',[]);
myApp.controller('requst',function($scope,$http){
        $http.get("localhost:3000/")
        	.then(function(response){
        		$scope.dta = response.data;
        		console.log("noor");
        	},function(reason){
        		console.log("nabi");
        		console.log(reason);
        });

});