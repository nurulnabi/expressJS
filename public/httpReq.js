var myApp = angular.module('httpReq',[]);
myApp.controller('requst',function($scope,$http){
        $http.get("arr.js")
        	.then(function(response){
        		$scope.dta = response.data;
        	},function(reason){
        		console.log(reason);
        });
});    	